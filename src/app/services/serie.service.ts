import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SerieService 
{
    series: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire)
    {
        //this.series = this.af.database.list('/series') as FirebaseListObservable<Serie[]>;
        this.series = this.af.database.list('/teste') as FirebaseListObservable<Serie[]>;
   
    }

    getSeries(){
        return this.series;
    }

}

interface Serie{
    $key?:string;
    title?:string;
    cover?:string;
    category?:string;
    seasons?:episodes[];
}

interface episodes{
    episodes?:episode[];
}

interface episode{
    description?:string;
    name?:string;
    status?:boolean
}

/*
interface Serie{
    $key?:string;
    title?:string;
    cover?:string;
    category?:string;
    espisodes?:episode[];
}

interface episode{
    description?:string;
    name?:string;
    status?:boolean
}
*/