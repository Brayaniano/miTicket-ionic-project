import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      title: "Titulo 1",
      descripcion : "lorem impusn",
      image: "../../assets/images/1.png",
      help_text : "Para mas información llamar a ...",
      class: "slide-1"
    },
    {
      title: "Titulo 2",
      descripcion : "lorem impusn",
      image: "../../assets/images/1.png",
      help_text : "Para mas información llamar a ...",
      class: "slide-2"
    },
    {
      title: "Titulo 3",
      descripcion : "lorem impusn",
      image: "../../assets/images/1.png",
      help_text : "Para mas información llamar a ...",
      class: "slide-3"
    }
  ]
  constructor() {}

}
