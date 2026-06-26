import {

  ChangeDetectorRef,
  Component,

  OnInit

} from '@angular/core';

import {

  ActivatedRoute

} from '@angular/router';

import {

  CommonModule

} from '@angular/common';

import { ApiService } from '../api-service';

@Component({
  selector: 'app-product-details',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './product-details.html',

  styleUrls: ['./product-details.css']
})

export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(

    private route: ActivatedRoute,

    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.api.getProductDetails(id).subscribe((res: any) => {

      this.product = res;
      this.cdr.detectChanges();
    })

  }

}