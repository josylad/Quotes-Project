import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myquotes: Quotes[] = [
  new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
  new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,9,9)),
  new Quotes(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,9,12)),
  new Quotes(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,9,18)),
  new Quotes(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
  new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14)),
];

addNewQuotes(myquotes){
    let myquotesLength = this.myquotes.length;
    myquotes.id = myquotesLength+1;
    myquotes.completeDate = new Date(myquotes.completeDate)
    this.myquotes.push(myquotes)
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
