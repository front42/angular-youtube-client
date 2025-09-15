import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from './interfaces';

@Pipe({
  name: 'filterByWords',
})
export class FilterByWordsPipe implements PipeTransform {
  transform(items: IItem[], query: string): IItem[] {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return items;

    return items.filter((item) => {
      const tags = item.snippet.tags.map((tag) => tag.toLowerCase());
      if (!tags.length) return false;
      return words.every((word) => tags.some((tag) => tag.includes(word)));
    });
  }
}
