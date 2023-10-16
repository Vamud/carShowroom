import { Pipe, PipeTransform } from '@angular/core';
import { DictionaryItem } from 'src/app/core/models/dictionary.model';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {

  transform(value: DictionaryItem[] | null, key: string): string {
    if (value){
      return value.find(i => i.key === key)?.translation ?? key; 
    }
    else {
      return key;
    }
  }

}
