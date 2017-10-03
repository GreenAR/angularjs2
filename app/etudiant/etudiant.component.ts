import { Etudiant } from './../model/etudiant';
import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector:'app-etudiant',
    templateUrl:'../../../app/etudiant/etudiant.component.html'
})


export class EtudiantComponent
{
    @Input()
etudiant: Etudiant; 
}