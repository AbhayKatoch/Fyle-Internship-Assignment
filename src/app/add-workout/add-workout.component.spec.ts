import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutComponent } from './add-workout.component';
import { WorkoutService } from '../workout.service';
import { FormsModule } from '@angular/forms';
import { ComponentRef } from '@angular/core';

describe('AddWorkoutComponent', () => {
  let component: AddWorkoutComponent;
  let fixture: ComponentFixture<AddWorkoutComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkoutComponent],
      imports:[FormsModule],
      providers:[WorkoutService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkoutComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.inject(WorkoutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add workout and reset field', ()=>{
    component.userName = 'Abhay';
    component.workoutType = 'Cycling';
    component.workoutMinutes = 30;
    const addWorkoutSpy = spyOn(workoutService,'addWorkout');
    component.addWorkout()
    expect(addWorkoutSpy).toHaveBeenCalled();
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBeNull();
  });
});
