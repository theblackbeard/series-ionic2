import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})

export class DetailsPage{
    serie: any;
    key: any;
    constructor(public navCtrl: NavController, public params: NavParams)
    {
        this.serie = params.get('serie');
    }    

    changeStatus(key){
        
        console.log(key)
    }

}