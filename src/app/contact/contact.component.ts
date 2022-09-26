import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block',
        marginLeft: '25%',
      })),
      state('closed', style({
        display: 'block',
        marginLeft: '0'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ContactComponent implements OnInit {
  isOpen = false;

  public contactInfo = {
    title: "Contactez moi ☎️",
    subtitle: "Discuter d'un projet ou juste me saluer ? Mon email est ouvert à tout .",
    number: "06 43 57 32 75",
    email_address: "abelix.pouillet@gmail.com"
  };
  constructor() {
    window.addEventListener("scroll", (event) => {
      const contact = document.querySelector('#contact');
      if (window.pageYOffset < contact.clientHeight) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
