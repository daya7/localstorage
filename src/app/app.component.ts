import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    this.grabar_localstorage();
    this.obtener_localstorage();
  }

  obtener_localstorage(){

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona")) ;
    console.log(nombre);
    console.log(persona);
  }
  grabar_localstorage (){

    let nombre: string = "Dayana";


    let persona = {
      nombre: "Lee",
      edad: 41,
      cords : {
        lat:10,
        lng: -10

      }

    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona) );
  }
}
