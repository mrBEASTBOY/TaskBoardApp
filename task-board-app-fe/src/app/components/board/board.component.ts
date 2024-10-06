import { Component, OnInit, Renderer2 } from '@angular/core';
import { TaskDetailsService } from 'src/app/services/task-details.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(
    private detailsService: TaskDetailsService,
    private render: Renderer2
  ) {}
  ngOnInit(): void {}

  openDetails() {
    this.detailsService.openDetailBoard();
    this.render.addClass(document.body, 'bg-black');
  }
}
