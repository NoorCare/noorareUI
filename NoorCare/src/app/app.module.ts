import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import UserRegistrationServices from './user-registration/userRegistration.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    DoctorComponent,
    HospitalComponent,
    PharmacyComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UserRegistrationServices, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
