import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup; // declare the registerForm property
  validation_messages = {
    last_name: [
      {type: "required", message: "El Apellido es requerido"},
      {type: "minLength", message: "Ingresa al menos 5 caracteres"}
    ]
  }
  //mensaje respuesta de registro
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.registroForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      )
      //Crear validaciones para el password, confirmation_password, name y last_name
      , 
      password: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    })
    }

  ngOnInit() {
  }

  register(regiser_data: any){
    console.log(regiser_data);
    //crear el servicio de registro
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
  
}
