import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const router: Routes = [
  {path: 'heroes', component: HeaderComponent}
];


@NgModule({
  declarations: [],
  imports: [
    
  ]
})
export class AppRoutingModule { }
