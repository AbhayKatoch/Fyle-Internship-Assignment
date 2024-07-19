import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  filtered: User[] = [];
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  search: string = '';
  selected: string = '';
  currentPage: number = 1;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.users = this.workoutService.getUsers();
    this.filterUsers();
  }

  filterUsers(): void {
    this.filtered = this.users.filter(user => {
      const matchName = user.name ? user.name.toLowerCase().includes(this.search.toLowerCase()):false;
      const matchWorkout = this.selected ? user.workouts.some((w: Workout) => w.type === this.selected) : true;
      return matchName && matchWorkout;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getWorkoutTypes(user: User): string {
    return user.workouts.map((w: Workout) => w.type).join(', ');
  }

  getTotalWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total: number, w: Workout) => total + w.minutes, 0);
  }
}
