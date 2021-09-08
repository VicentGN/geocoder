import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private credits: string = "Geocoder"
  private year: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  getYear() {
    return this.year.getFullYear();
  }

  getCredits() {
    return this.credits;
  }



}
