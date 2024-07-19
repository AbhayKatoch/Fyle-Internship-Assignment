import { Component } from '@angular/core';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'health-challenge-tracker';
}
