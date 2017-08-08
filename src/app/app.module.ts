import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }  from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';


@NgModule({
imports: [
  BrowserModule,
  FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  RouterModule.forRoot([
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
  ])
],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
