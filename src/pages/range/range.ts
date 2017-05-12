import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
  //styleUrls: 'alert.scss'
})
export class RangePage {

	constructor(public navCtrl: NavController) {}

	brightness: number = 20;
	contrast: number = 0;
	warmth: number = 1300;
	structure: any = { lower: 33, upper: 60 };
	text: number = 0;
	}
	
