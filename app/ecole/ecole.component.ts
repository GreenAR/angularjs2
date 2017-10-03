import { Etudiant } from './../model/etudiant';
import{Component,Input}from'@angular/core';

@Component({
moduleId:module.id,
selector:'app-ecole',
templateUrl: '../../../app/ecole/ecole.component.html'
})
export class EcoleComponent {
    @Input()
name:string='esprit';
etudiantCurrant=new Etudiant(null,null,null);
etudiants=[];
etat=true;
vue=false;
basculerEtat(){
  this.etat=!this.etat;
  console.log(this.etat);//afficher l'etat fil conole
}
addEtudiant(event){
    let e=new Etudiant(this.etudiantCurrant.nom,this.etudiantCurrant.prenom,this.etudiantCurrant.numInscri);
    this.etudiants.push(e);
    this.etudiantCurrant.nom="";
    this.etudiantCurrant.prenom="";
    this.etudiantCurrant.numInscri="";
  }

}