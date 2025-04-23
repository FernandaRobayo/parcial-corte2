import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importa CUSTOM_ELEMENTS_SCHEMA
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from '../datos/datos.component';
import { FechaComponent } from '../fecha/fecha.component';
import { MesaSelectorComponent} from '../mesas/mesas.component';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonicModule, 
    CommonModule,
    ClienteComponent,
    FechaComponent,
    MesaSelectorComponent
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class HomePage {
  vistaActual: string = 'agregar'; // Vista inicial

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}