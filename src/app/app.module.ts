import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import {FormsModule} from "@angular/forms";
import { ClientCardComponent } from './components/client-card/client-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultListComponent,
    ClientCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
