import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../models/mock-product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  product = PRODUCTS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
