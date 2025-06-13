import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'nz-layout',
  standalone: true,
  template: '<ng-content></ng-content>'
})
export class NzLayout {}

@Component({
  selector: 'nz-header',
  standalone: true,
  template: '<header><ng-content></ng-content></header>'
})
export class NzHeader {}

@Component({
  selector: 'nz-content',
  standalone: true,
  template: '<main><ng-content></ng-content></main>'
})
export class NzContent {}

@NgModule({
  imports: [NzLayout, NzHeader, NzContent],
  exports: [NzLayout, NzHeader, NzContent]
})
export class NzLayoutModule {}

@Component({
  selector: 'ul[nz-menu]',
  standalone: true,
  template: '<ng-content></ng-content>'
})
export class NzMenu {}

@Component({
  selector: 'li[nz-menu-item]',
  standalone: true,
  template: '<ng-content></ng-content>'
})
export class NzMenuItem {}

@NgModule({
  imports: [NzMenu, NzMenuItem],
  exports: [NzMenu, NzMenuItem]
})
export class NzMenuModule {}

@Component({
  selector: 'nz-card',
  standalone: true,
  template: '<div class="card"><ng-content></ng-content></div>'
})
export class NzCard {}

@NgModule({
  imports: [NzCard],
  exports: [NzCard]
})
export class NzCardModule {}
