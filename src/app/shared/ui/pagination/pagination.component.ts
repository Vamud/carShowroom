import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { LanguageService } from '@app/services/language.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();
  dictionary$ = this.languageService.fetchTranslation();

  pages: number[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPages']) {
      const temp: number[] = [];
      for (let i = 1; i < this.totalPages + 1; i++) {
        temp.push(i);
      }
      this.pages = temp;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  selectPage(page: number): void {
    this.pageChanged.emit(page);
  }
}
