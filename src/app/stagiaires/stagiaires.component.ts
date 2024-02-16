import { Component } from '@angular/core';

@Component({
  selector: 'app-stagiaires',
  standalone: true,
  imports: [],
  templateUrl: './stagiaires.component.html',
  styleUrl: './stagiaires.component.css'
})
export class StagiairesComponent {

  formateur:string="Mohamed Amine MEZGHICH";
  logo:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhfJQZMxfTEgkCwULqbvcifmRV9CVpEjufFsf9xvKoQ&s";

  greeting()
  {
    alert("Bonjour mes chers étudiants!");
  }

  bye(){
    alert("A très Bientôt!");
  }
}
