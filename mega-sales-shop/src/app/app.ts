import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzLayoutModule, NzMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mega-sales-shop';
}
