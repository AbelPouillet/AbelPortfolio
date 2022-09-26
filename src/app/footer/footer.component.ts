import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('openClose', [
      state('normal', style({
        fontSize: '1em',
      })),
      state('biger', style({
        fontSize: '2em',
      })),
      transition('normal <=> biger', animate(1200)),
      // transition('highlighted => normal', animate(800))
    ])]
})
export class FooterComponent implements OnInit {
  isOpen = false;
  constructor() {
    window.addEventListener("scroll", (event) => {
      const footer = document.querySelector('#footer');
      if (window.pageYOffset < footer.clientHeight) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    });
  }

  ngOnInit(): void {

  }

}
