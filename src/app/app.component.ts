import { Task } from './interfaces/task';
import { Component } from '@angular/core';

import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks : Task[] = [];
  public currentTaskText : string = '';

  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  addTask(){
    let task = {
      text: this.currentTaskText,
      completed: false,
      created_at: new Date
    };
    
    this.tasks.push(task);
    this.currentTaskText = '';
  }

  editTask(task){
    task.editMode = !task.editMode;
  }

  removeTask(task){
    this.tasks = this.tasks.filter(_task => _task != task);
  }

  completedTasks() {
    return this.tasks.filter(task => task.completed)
  }

}