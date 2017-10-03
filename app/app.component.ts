import { Component } from '@angular/core';

@Component({
    selector: 'my-app', //ism l component ili ba3d bech n3aytoulo bih 
    template: `
    <app-ecole [name]="nomEcole2"></app-ecole>
    ` //vue associé à ce composant
})
export class AppComponent { 
    nomEcole2:string='ESPRIT';
       
}
