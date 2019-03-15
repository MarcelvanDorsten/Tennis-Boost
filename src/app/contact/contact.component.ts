import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

formErrors = {
  'voornaam': '',
  'achternaam': '',
  'telnum': '',
  'email': ''
};

validationMessages = {
  'voornaam': {
    'required': 'Voornaam is verplicht.',
    'minlength': 'De voornaam moet minimaal 2 tekens lang zijn.',
    'maxlength': 'De voornaam mag niet meer dan 25 tekens lang zijn.'
  },
  'achternaam': {
    'required': 'Achternaam is verplicht.',
    'minlength': 'De achternaam moet minimaal 2 tekens lang zijn.',
    'maxlength': 'De achternaam mag niet meer dan 25 tekens lang zijn.'
},
  'telnum': {
  'required': 'Tel. nummer is verplicht.',
  'pattern': 'Tel. nummer mag alleen cijfers bevatten.'
  },
  'email': {
    'required': 'Email is verplicht.',
    'email': 'E-mail is niet in geldig formaat'
},
};

constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

createForm(): void {
  this.feedbackForm = this.fb.group({
    voornaam: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    achternaam: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    telnum: [0, [Validators.required, Validators.pattern] ],
    email: ['', [Validators.required, Validators.email] ],
    accoord: false,
    contacttype: 'None',
    boodschap: ''
  });

  this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set from validation messages
}
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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
  this.feedback = this.feedbackForm.value;
  console.log(this.feedback);
  this.feedbackForm.reset({
    voornaam: '',
    achternaam: '',
    telnum: '',
    email: '',
    accoord: false,
    contacttype: 'None',
    boodschap: ''
  });
  this.feedbackFormDirective.resetForm();
}
}
