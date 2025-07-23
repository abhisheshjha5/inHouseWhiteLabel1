import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ReservationFormComponent } from './reservation-form.component';
import { GuestProfileComponent } from './guest-profile.component';
import { HousekeepingPanelComponent } from './housekeeping-panel.component';
import { CheckinCheckoutComponent } from './checkin-checkout.component';

export const routes: Routes = [ { path: 'dashboard', component: DashboardComponent },
  { path: 'reservation', component: ReservationFormComponent },
  { path: 'guest-profile', component: GuestProfileComponent },
  { path: 'housekeeping', component: HousekeepingPanelComponent },
  { path: 'checkin-checkout', component: CheckinCheckoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
