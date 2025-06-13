import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, NzCardModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

}
