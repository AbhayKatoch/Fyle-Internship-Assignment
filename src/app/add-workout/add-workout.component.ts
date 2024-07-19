import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    const user = {
      name: this.userName,
      workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
    };
    this.workoutService.addWorkout(user);
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
