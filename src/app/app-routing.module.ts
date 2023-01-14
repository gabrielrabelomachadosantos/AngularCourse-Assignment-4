import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OddComponent } from './view/components/odd/odd.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: Routes = [
    { path: '/', component: AppComponent },
    { path: '/odd', component: OddComponent }
  ]
 }
