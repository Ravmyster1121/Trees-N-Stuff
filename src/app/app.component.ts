import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Trees-N-Stuff';

  searchArray = [];

  addSearch(value) {
    this.searchArray.push(value);
    console.log(this.searchArray);
  }

  ngOnInit()
  {
    
  }
}
