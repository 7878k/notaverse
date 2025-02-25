import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { PriceComponent } from './pages/price/price.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home/:userId', component: HomeComponent },
  { path: 'price', component: PriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
