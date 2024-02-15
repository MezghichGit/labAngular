import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from './Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'ams';
  formateur = "Amine";
  names:string[] = ["ahmed","anne","teddy","pierre"];
  animals : Animal[] = [new Animal(1,"Chien",10,12), new Animal(2,"Chat",10,12),new Animal(3,"Poisson",1,12), new Animal(4,"Oiseau",1,2)];

}

