import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  isExpanded1 = false;
  isExpanded2 = false;
  isExpanded3 = false;

  toggleCard1() {
    this.isExpanded1 = !this.isExpanded1;
  }

  toggleCard2() {
    this.isExpanded2 = !this.isExpanded2;
  }

  toggleCard3() {
    this.isExpanded3 = !this.isExpanded3;
  
  }
  constructor() { }

  ngOnInit() {
  }

}
