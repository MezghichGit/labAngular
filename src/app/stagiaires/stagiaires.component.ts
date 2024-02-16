import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MypipePipe } from "../mypipe.pipe";

@Component({
    selector: 'app-stagiaires',
    standalone: true,
    templateUrl: './stagiaires.component.html',
    styleUrl: './stagiaires.component.css',
    imports: [CommonModule, MypipePipe]
})
export class StagiairesComponent {

  formateur:string="Mohamed Amine MEZGHICH";
  logo:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhfJQZMxfTEgkCwULqbvcifmRV9CVpEjufFsf9xvKoQ&s";

  afficherMsg:boolean = true;
  greeting()
  {
    //alert("Bonjour mes chers étudiants!");
    this.afficherMsg = !this.afficherMsg;
  }

  bye(){
    alert("A très Bientôt!");
  }
}
