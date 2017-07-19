import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Pagina3Page} from "../index.paginas"

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3:any = Pagina3Page;
  mutantes:any[] = [
    {
      nombre:"Wolverine",
      poder:"Regeneracion celular acelerada"
    },
    {
      nombre:"Ciclope",
      poder:"Rayos laser"
    },
    {
      nombre:"Xavier",
      poder:"El mas vergitas"
    },
    {
      nombre:"Bestia",
      poder:"Una bestia"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irPagina3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page,{'mutante':mutante});
  }

}
