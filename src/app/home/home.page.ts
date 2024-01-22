import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = [
    {
      text: 'Ir',
      handler: () => {
        this.router.navigateByUrl("/intro");
      }
    }
  ];
  constructor(
    private router: Router,
    private storage: Storage
    ) {}

    goToIntro( ){
      console.log("Botón");
      this.router.navigateByUrl("/intro");
      this.storage.set('mostreLaIntro',true);
    }
}
