import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationPipe } from '@shared/ui/pipes/dictionary/translation.pipe';



@NgModule({
  declarations: [TranslationPipe],
  imports: [
    CommonModule
  ],
  exports: [TranslationPipe]
})
export class SharedModule { }
