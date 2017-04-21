import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SerieService } from '../../app/services/serie.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-series',
  templateUrl: 'series.html'
})
export class SeriesPage  {
  series: any;
  constructor(public navCtrl: NavController, private serieService: SerieService) {}

  ngOnInit(){
    this.serieService.getSeries().subscribe(series => {
      console.log(series)
      this.series = series;


    })
  }

  viewSerie(serie){
     this.navCtrl.push(DetailsPage, {
        serie:serie
      })
  }


}
