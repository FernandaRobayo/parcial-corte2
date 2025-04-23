import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fecha-componenapp-fecha-component',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss']
})
export class FechaComponent {
  hoy: string = new Date().toISOString();
  confirmado: boolean = false;

  encabezado = {
    nombreCliente: '',
    cedula: '',
    fecha: ''
  };

  guardarEncabezado() {
    if (this.encabezado.nombreCliente && this.encabezado.cedula && this.encabezado.fecha) {
      this.confirmado = true;
      console.log('Encabezado de factura:', this.encabezado);
    }
  }
}
