import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BrandfilterComponent } from './brandfilter/brandfilter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoggedSearchComponent } from './logged-search/logged-search.component';
import { LoginComponent } from './login/login.component';
import { PricesortComponent } from './pricesort/pricesort.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:RegistrationComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"productDetails",
    component:DetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"searchResults",
    component:ResultsComponent
  },
  {
    path:"results",
    component:LoggedSearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"price",
    component:PricesortComponent,
    canActivate:[AuthGuard]
  },{
    path:"brand",
    component:BrandfilterComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
