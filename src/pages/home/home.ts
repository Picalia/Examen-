import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios = [
    {
      Nombre : 'Nombre',
      Mail : 'Mail',
      Contraseña : 'Contraseña'
    }
  ];
  registrarse = RegistrarsePage;
  usuario = '';
  contraseña = '';
  mail = '';

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {
    
    

}

  

  clickIS(u){
    let index = this.usuarios.findIndex(u => u.Mail == this.mail && u.Contraseña == this.contraseña );
    
    if (index>=0 ) {

      console.log('No existe el usurio'); 
      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'Creo que necesitas regitrarte',
        buttons: ['OK']
      });
      alert.present();
  
      
      
    }
    else {
      console.log('Ya puedes comprar'); 
      const alert = this.alertCtrl.create({
        title: 'Felicidades!',
        subTitle: 'Ya eres parte de ntros',
        buttons: ['OK']
      });
      alert.present();
    }

    

    


    
    

  }

}





