import { Component, OnInit, Renderer2 } from '@angular/core';
import { TaskDetailsService } from 'src/app/services/task-details.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  constructor(
    private detailsService: TaskDetailsService,
    private render: Renderer2
  ) {}
  isOpen!: boolean;
  ngOnInit(): void {
    this.detailsService.openDetails.subscribe((data) => (this.isOpen = data));
  }

  closeDetails() {
    this.detailsService.closeDetailBoard();
    this.render.removeClass(document.body, 'bg-black');
  }
}
