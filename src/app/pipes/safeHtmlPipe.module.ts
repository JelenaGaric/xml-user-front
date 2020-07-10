import { NgModule } from '@angular/core';
import { SafeHtml } from './safeHtml.pipe';

@NgModule({
  imports: [],
  declarations: [SafeHtml],
  exports: [SafeHtml],
})

export class SafeHtmlPipeModule {

  static forRoot() {
    return {
      ngModule: SafeHtmlPipeModule,
      providers: [],
    };
  }
}
