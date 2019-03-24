import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';
import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/beoordelingen';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class DetailsComponent implements OnInit {

tenniscannon: Tenniscannon;
tenniscannonIds: string[];
prev: string;
next: string;
@ViewChild('cform') commentFormDirective;
comment: Comment;
commentForm: FormGroup;
errMess: string;
tenniscannoncopy: Tenniscannon;
visibility = 'shown';

formErrors = {
  'gebruiker': '',
  'opmerking': ''
};
validationMessages = {
  'gebruiker': {
    'required': 'Naam is verplicht.',
    'minlength': 'De naam moet minimaal 2 tekens lang zijn.'
},
'opmerking': {
  'required': 'Opmerking is verplicht.',
  'minlength': 'De opmerking moet minimaal 2 tekens lang zijn.'
}
}

  constructor(private tenniscannonService: TenniskanonService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
    this.tenniscannonService.getTenniscannonIds()
    .subscribe((tenniscannonIds) => this.tenniscannonIds = tenniscannonIds);
  this.route.params.pipe(switchMap((params: Params) => { this.visibility ='hidden'; return this.tenniscannonService.getTenniscannon(params['id']); }))
        .subscribe(tenniscannon => { this.tenniscannon = tenniscannon; this.tenniscannoncopy = tenniscannon; this.setPrevNext(tenniscannon.id); this.visibility = 'shown'; },
        errmess => this.errMess = <any>errmess);
}

setPrevNext(tenniscannonId: string) {
  const index = this.tenniscannonIds.indexOf(tenniscannonId);
  this.prev = this.tenniscannonIds[(this.tenniscannonIds.length + index -1) % this.tenniscannonIds.length];
  this.next = this.tenniscannonIds[(this.tenniscannonIds.length + index +1) % this.tenniscannonIds.length];
}

  goBack(): void {
    this.location.back();
  }
  createForm() {
    this.commentForm =this.fb.group({
      gebruiker: ['', [Validators.required, Validators.minLength(2)]],
      schaal: 5,
      opmerking: ['', [Validators.required, Validators.minLength(2)]]
    });
    
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
  
    this.onValueChanged(); //(re)set from validation messages
  }
  
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; } 
     const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        } 
      }
    }
  }
  
  
    onSubmit() {
      this.comment = this.commentForm.value;
      this.comment.datum = new Date().toISOString();
      console.log(this.comment);
      this.tenniscannoncopy.comments.push(this.comment);
      this.tenniscannonService.putTenniscannon(this.tenniscannoncopy)
      .subscribe(tenniscannon => {
        this.tenniscannon = tenniscannon; this.tenniscannoncopy = tenniscannon;
      },
      errmess => { this.tenniscannon = null; this.tenniscannoncopy = null; this.errMess = <any>errmess; });
      this.commentFormDirective.resetForm()
      this.commentForm.reset({
        gebruiker: '',
        schaal: 5,
        opmerking: ''
      });
      this.commentFormDirective.resetForm();
    } 
}
