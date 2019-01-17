import { Component, OnInit } from '@angular/core';
import { PhotoInfo } from './photo-info';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	show = false;
	dataPhotos: PhotoInfo;
	photosLimit = 10;
	photos: any[];

  constructor( public dataService:  DataService) { }

  ngOnInit() {
  	this.dataService.getPhotos().subscribe(resp => {
  		this.photos = resp.slice(0, this.photosLimit);  		
  	});  	
  }

  showInfo(photo: PhotoInfo) {
  	this.dataPhotos = photo;
  }

  tshowPopup() {
  	this.show = true;
  }

}
