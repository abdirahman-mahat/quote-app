import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})export class QuotesComponent implements OnInit {
  quotes = [
      new Quotes(1,'Benjamin Disraeli','The secret of success is constancy to purpose.', 'John' ,new Date(2018,9,1) ),
      new Quotes(2,'Henry David Thoreau','We were born to succeed, not to fail.', 'Mark' , new Date(2018,8,1) ),


  ]

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    // completeQuote(isComplete,index){
    //    if (isComplete) {
    //        this.quotes.splice(index, 1);
    //        }
    //        }

  constructor() { }
  ngOnInit() {
  }
  deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`confirm you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
}
