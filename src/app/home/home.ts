import { Component } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel';
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [CarouselComponent, Accordion],

  templateUrl: './home.html',

  styleUrls: ['./home.css']
})

export class HomeComponent {

}