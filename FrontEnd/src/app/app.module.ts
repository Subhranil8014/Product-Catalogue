import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import{MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoggedSearchComponent } from './logged-search/logged-search.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import { PricesortComponent } from './pricesort/pricesort.component';
import { BrandfilterComponent } from './brandfilter/brandfilter.component';
import { BrandPipe } from './brand.pipe';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    ResultsComponent,
    DetailsComponent,
    LoggedSearchComponent,
    PricesortComponent,
    BrandfilterComponent,
    BrandPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [LoginService, AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
