import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskDetailsService {
  openDetails: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  openDetailBoard() {
    this.openDetails.next(true);
  }

  closeDetailBoard() {
    this.openDetails.next(false);
  }
}
