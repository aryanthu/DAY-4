import { Component } from '@angular/core';

import { FormComponent } from '../form/form';

@Component({
  selector: 'app-contact',

  standalone: true,

  imports: [FormComponent],

  templateUrl: './contact.html',

  styleUrls: ['./contact.css']
})

export class ContactComponent {

}