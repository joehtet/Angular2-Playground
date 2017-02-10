import { Component, OnInit } from '@angular/core';
import { Cat } from './cat';
//git commit test , ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coding is fun!';
  // cat1: Cat = { name: "Elise", age: 7, status:"changed"} 
  cat1: Cat = new Cat("Eliza", 8);
  cat2: Cat = new Cat("Big Money", 14); 
   
  ngOnInit(){ 
    this.cat1.setStatus("changed");

    console.log(this.cat1.name);
    console.log(this.cat1.age);
    console.log(this.cat1.getStatus());
    console.log(this.cat2.name);
    console.log(this.cat2.age);
    console.log(this.cat2.getStatus());
  }
}
