import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from "../index.paginas";
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

navegarPagina(){

  this.navCtrl.push(Pagina2Page);
  console.log("aaa");
}

}
