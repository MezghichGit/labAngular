export class Animal {
  id: number;
  espece: string;
  poids: number;
  taille: number;

  infoAnimal() {
    //console.log("Infos Animal : "+ this.id +" "+this.espece+" "+this.poids+" "+this.taille);
    return "Infos Animal : " + this.id + " " + this.espece + " " + this.poids + " " + this.taille;
  }

  constructor(id: number, espece: string, poids: number, taille: number) {
    this.id = id;
    this.espece = espece;
    this.poids = poids;
    this.taille = taille;
  }

}
