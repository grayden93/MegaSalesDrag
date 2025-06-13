import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, NzCardModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

}
