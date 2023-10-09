import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();
  
  pages: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i < this.totalPages + 1; i++){
      this.pages.push(i);
    }
  }

  previousPage() {
    if (this.currentPage > 1){
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages){
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  selectPage(page: number) {
    this.pageChanged.emit(page);
  }
}
