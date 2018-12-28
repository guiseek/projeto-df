import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DfModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DfModule,
      providers: []
    }
  }
}
