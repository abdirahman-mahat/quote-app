import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteVoteComponent } from './quote-vote.component';

describe('QuoteVoteComponent', () => {
  let component: QuoteVoteComponent;
  let fixture: ComponentFixture<QuoteVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
