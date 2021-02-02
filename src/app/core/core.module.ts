import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';

/**
 * Core module is to place the singleton elements
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, ServicesModule],
  exports: [ServicesModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core module already exists! It should be imported only once within the app.');
    }
  }
}
