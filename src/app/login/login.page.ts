import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "El correo es requerido"},
      {type: "pattern", message: "Ingresa un Correo Valido"}
    ],
    password: [
      {type: "required", message: "La Contraseña es requerida"},
      {type: "pattern", message: "Ingresa una Contraseña que tenga números y letras"}
    ]
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
    ) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
          )
        ])
      )
    })
  }

  ngOnInit() {
  }
  login(login_data: any){
    console.log(login_data);
    this.authService.loginAuth(login_data).then(res => {
      this.storage.set("userLogged",true);
      this.navCtrl.navigateForward('/home');
    }).catch(err => {
      this.loginMessage = err;
    });
  }
  goToRegistro(){
    this.navCtrl.navigateBack("/registro");
  }
}
