import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './workout.service';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkoutComponent,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
