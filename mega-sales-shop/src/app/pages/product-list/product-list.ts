import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, NzCardModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

}
