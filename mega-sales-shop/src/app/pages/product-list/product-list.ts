import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NzCardModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

}
