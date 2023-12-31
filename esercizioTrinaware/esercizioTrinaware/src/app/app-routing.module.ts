import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SediComponent } from './components/sedi/sedi.component';
import { SedeDettaglioComponent } from './components/sedi/sede-dettaglio/sede-dettaglio.component';
import { AboutComponent } from './components/about/about.component';
import { AutomobiliComponent } from './components/sedi/automobili/automobili.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sedi', component: SediComponent,
    children: [
      { path: ':id/:nomeSede', component: SedeDettaglioComponent }
    ]
  },
  { path: 'automobili', component: AutomobiliComponent},
  { path: 'about', component: AboutComponent}
  // { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
