import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Abel Pouillet",
    title: "Bonjour, Je suis Abel Pouillet",
    subTitle: "Un dévellopeur fullstack passioner 🚀 J'ai de l'expérience dans le développement d'application web et mobile avec Ionic / Angularjs / Nodejs / php et quelques autres languages et Frameworks.",
  }
  ngOnInit(): void {
  }

}
