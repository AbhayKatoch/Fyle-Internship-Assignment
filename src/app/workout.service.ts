import {  Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WorkoutService{
    private users: any[] = JSON.parse(localStorage.getItem('users')|| '[]');

    constructor(){

    }

    addWorkout(user:any){
        const existing =  this.users.find(u=>u.name === user.name);
        if(existing){
            existing.workouts.push(...user.workouts);
        }else{
            user.id = this.users.length ? this.users[this.users.length -1].id +1 :1;
            this.users.push(user);
        }
        this.saveUsers();
    }
    getUsers() {
        return this.users;
      }
    
      private saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
      }
}


