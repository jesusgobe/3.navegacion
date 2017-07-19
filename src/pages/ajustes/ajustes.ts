import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ModalCtrl:ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

mostrarModal(){
  let modal = this.ModalCtrl.create( ModalPage);
  modal.present();
}

}
