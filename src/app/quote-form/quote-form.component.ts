import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes(0, '', '','', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  @Input() addNewQuote: Function;

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    // this.newQuote.reset();
  }
//   onSubmit() {
//   if (this.myform.valid) {
//     console.log('Form Submitted!');
//     this.myform.reset();
//   }
// }


  constructor() { }

  ngOnInit() {
  }

}
