import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Reservation Form</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Guest Name: <input formControlName="guestName" /></label><br />
      <label>Email: <input formControlName="email" /></label><br />
      <label>Check-In Date: <input type="date" formControlName="checkinDate" /></label><br />
      <label>Check-Out Date: <input type="date" formControlName="checkoutDate" /></label><br />
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
   
  `
})
export class ReservationFormComponent {
  submitted = false;
  form = new FormGroup({
    guestName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    checkinDate: new FormControl('', Validators.required),
    checkoutDate: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.submitted = true;
  }
}
