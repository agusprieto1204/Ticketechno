import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { ComprasFormatoPipe } from './pipes/compras-formato.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ComprasFormatoPipe 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
