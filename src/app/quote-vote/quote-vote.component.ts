import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  @Input() numberOfVotes: number = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  upVoteButtonClick() {
    this.numberOfVotes++;
    this.change.emit(this.numberOfVotes);
  }
  downVoteButtonClick() {
    this.numberOfVotes--;
    this.change.emit(this.numberOfVotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
