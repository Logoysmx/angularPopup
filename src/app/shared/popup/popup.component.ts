import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

	@Input('mockData') dataContent: any;

	@Input() title: string;	
	@Input() isShowed: boolean;
	@Output() isDisplayed = new EventEmitter<boolean>();	

  constructor() { 
  	this.isShowed = false;
  }

  ngOnInit() {
  }

  close() {
  	this.isShowed = false;
  	this.isDisplayed.emit(this.isShowed);
  }



}
