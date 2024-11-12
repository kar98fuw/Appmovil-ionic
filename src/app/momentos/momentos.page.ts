import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {
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
