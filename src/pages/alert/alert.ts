import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
  //styleUrls: ['./alert.scss']
})
export class AlertPage {
	testRadioOpen: boolean;
	testRadioResult;
	
	testCheckboxOpen : boolean;
	testCheckboxResult;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

	doPrompt() {
		let prompt = this.alertCtrl.create({
		  title: 'Login',
		  message: "Enter a name for this new album you're so keen on adding",
		  inputs: [
			{
			  name: 'title',
			  placeholder: 'Title'
			},
		  ],
		  buttons: [
			{
			  text: 'Cancel',
			  handler: data => {
				console.log('Cancel clicked');
			  }
			},
			{
			  text: 'Save',
			  handler: data => {
				console.log('Saved clicked');
			  }
			}
		  ]
		});
		prompt.present();
	}
	
	doConfirm() {
		
		let confirm = this.alertCtrl.create({
		  title: 'Use this lightsaber?',
		  message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
		  buttons: [
			{
			  text: 'Disagree',
			  handler: () => {
				console.log('Disagree clicked');
			  }
			},
			{
			  text: 'Agree',
			  handler: () => {
				console.log('Agree clicked');
			  }
			}
		  ]
		});
		confirm.present()
	}

	doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
	
	doCheckbox() {
		let alert = this.alertCtrl.create();
		alert.setTitle('Which planets have you visited?');

		alert.addInput({
		  type: 'checkbox',
		  label: 'Alderaan',
		  value: 'value1',
		  checked: true
		});

		alert.addInput({
		  type: 'checkbox',
		  label: 'Bespin',
		  value: 'value2'
		});

		alert.addButton('Cancel');
		alert.addButton({
		  text: 'Okay',
		  handler: data => {
			console.log('Checkbox data:', data);
			this.testCheckboxOpen = false;
			this.testCheckboxResult = data;
		  }
		});
		alert.present();
	}
	
	}
	
