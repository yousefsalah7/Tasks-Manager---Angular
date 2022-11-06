import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './log-in/log-in.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    AdminModule,
    FormsModule,
    MatTreeModule,
    ReactiveFormsModule,
    JwtModule.forRoot(
      {
        config:{
          tokenGetter:() => {
      return (sessionStorage.getItem("currenUser")? JSON.parse(sessionStorage.getItem("currentUser") as any).token  : null)
                           }
               }
       }
                      )
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
