import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'animals', component: AnimalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
