import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MainRouter } from "./app.router";
import { HeaderComponent } from "./components/header/header.component";
import { AppComponent } from './app.component';
import { AuthService } from "./services/auth/auth.service";
import { CustomersService} from "./services/customers/customers.service";
import { HttpClientModule } from "@angular/common/http";
import {MatFormFieldModule} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSelectModule} from "@angular/material";
import {MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


  providers: [ AuthService, CustomersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
