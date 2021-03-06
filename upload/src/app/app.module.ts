import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendFileService } from './send-file.service';
import { HomeComponent } from './home/home.component';
import { ClickOutSideDirective } from './click-out-side.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClickOutSideDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SendFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
