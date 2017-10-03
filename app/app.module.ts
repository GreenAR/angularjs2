import { EtudiantComponent } from './etudiant/etudiant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EcoleComponent } from './ecole/ecole.component';

@NgModule({
    imports: [ BrowserModule ,FormsModule],
    declarations: [ AppComponent,EcoleComponent,EtudiantComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }