import {

  Component,

  OnInit,

  ChangeDetectorRef

} from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ApiService } from '../api-service';

@Component({
  selector: 'app-products',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './products.html',

  styleUrls: ['./products.css']
})

export class ProductsComponent implements OnInit {

  data: any[] = [];

  constructor(

    private api: ApiService,

    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {

    this.api.getAllProducts().subscribe({

      next: (res: any) => {

        this.data = [...res];

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}