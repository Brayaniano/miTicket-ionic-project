import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Conoce Mi ticket",
      descripcion : "Somos una app que podras descargar desde tu dispositivo movil para comprar tus estradas desde cualquier lugar",
      image: "../../assets/images/slide-1.jpg",
      class: "slide-1"
    },
    {
      title: "Metodos de Pago",
      descripcion : "Contamos con multiples metodos de pago online, son totalmente seguros para ti, también tenemos puntos fisicos donde puedes realizar tus pagos sin problema",
      image: "../../assets/images/slide-2.jpg",
      class: "slide-1"
    },
    {
      title: "¡Relajate!",
      descripcion : "Dedica tú tiempo a otras actividades, con nosotros, solo descargas la app y compras tus tickets, tendrás mucho mas tiempo libre para ti",
      image: "../../assets/images/slide-3.jpg",
      class: "slide-1"
    }
  ]
  
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  goToHome( ){
    console.log("Botón");
    this.router.navigateByUrl("/home");
    this.storage.set('mostreLaIntro',true);
  }

  ngOnInit() {
  }

}
