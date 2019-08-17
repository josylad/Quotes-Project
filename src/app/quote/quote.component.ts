import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myquotes: Quotes[] = [
  new Quotes(1, 'Find an online version and watch merlin find his son', 'Watch finding Nemo', new Date(2019,6,17)),
  new Quotes(2, 'I have to buy cookies for the parrot', 'Buy Cookies',new Date(2019,6,17)),
  new Quotes(3, 'Diana has her birthday coming up soon', 'Get new Phone Case', new Date(2019,6,17)),
  new Quotes(4, 'Pupper likes expensive snacks', 'Get Dog Food', new Date(2019,6,18)),
  new Quotes(5,'Solve math homework','Damn Math',new Date(2019,7,18)),
  new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,7,18)),
];

addNewQuotes(Quotes){
    let myquotesLength = this.myquotes.length;
    Quotes.id = myquotesLength+1;
    Quotes.completeDate = new Date(Quotes.completeDate)
    this.myquotes.push(Quotes)
  }

  toggleDetails(index){
    this.myquotes[index].showDescription = !this.myquotes[index].showDescription;
  }

  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myquotes[index].name}?`)

      if (toDelete){
        this.myquotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
