import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {


  usuarios = '';
  Contraseña= '';
  usuario = '';
  Mail = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, public alertCtrl: AlertController) {

      this.storage.keys()
    .then(keys => {
      if (keys.some(key => key == 'usuarios2')){
        this.storage.get('usuarios2')
        .then(usuarios => {
          this.usuarios = JSON.parse(usuarios);
        })
      }
      //console.log(keys);
    })

  }


  clickregistrarse(){
    this.navCtrl.push(this.registrarse,{usuarios:this.usuarios});
    if (this.Contraseña.length > 8) {

      console.log('Felicidades ya esta regitrado; ahora puede disfrutr nuestra tienda online'); 
      const alert = this.alertCtrl.create({
        title: 'Felicidades',
        subTitle: 'Su registro ha sido exitoso',
        buttons: ['OK']
      });
      alert.present();
  
      this.usuario.push({
      contraseña: this.Contraseña,  
      usuario: this.usuario
    })
      this.usuario = "";
      this.Contraseña = ""
    
      
    }
    else {
      console.log('La contraseña tiene menos de 8 caracteres'); 
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Le falta parametros a la contraseña',
        buttons: ['OK']
      });
      alert.present();
    }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }

}
