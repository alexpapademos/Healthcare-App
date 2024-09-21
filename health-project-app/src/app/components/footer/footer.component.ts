import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  currentYear = '';

  ngOnInit(): void {
    this.currentYear = formatDate(new Date(), 'yyyy', 'en');
  }

}
