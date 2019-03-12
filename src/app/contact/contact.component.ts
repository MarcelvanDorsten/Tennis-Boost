import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

createForm() {
  this.feedbackForm = this.fb.group({
  voornaam: '',
  achternaam: '',
  telnum: 0,
  email: '',
  accoord: false,
  contacttype: 'None',
  boodschap: ''
});
}
onSubmit() {
  this.feedback = this.feedbackForm.value;
  console.log(this.feedback);
  this.feedbackForm.reset();
}
}
