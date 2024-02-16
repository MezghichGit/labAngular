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

  greeting()
  {
    alert("Bonjour mes chers étudiants!");
  }

}
