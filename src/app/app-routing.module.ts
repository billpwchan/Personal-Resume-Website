import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'Bill', pathMatch: 'full' },
  { path: 'Bill', component: AppComponent },
  { path: '**', component: NotFoundComponentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
