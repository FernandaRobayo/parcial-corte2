import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class ClienteComponent {
  nuevoCliente = {
    cedula: '',
    nombre: '',
    contacto: '',
    email: '',
    telefono: ''
  };

  clientes: any[] = [];

  guardarCliente() {
    if (this.nuevoCliente.cedula && this.nuevoCliente.nombre) {
      this.clientes.push({ ...this.nuevoCliente });
      this.nuevoCliente = {
        cedula: '',
        nombre: '',
        contacto: '',
        email: '',
        telefono: ''
      };
    }
  }
}
