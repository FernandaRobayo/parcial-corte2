import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mesa-selector',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesaSelectorComponent {
  mesasDisponibles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  mesaSeleccionada: number | null = null;

  seleccionarMesa(mesa: number) {
    this.mesaSeleccionada = mesa;
  }
}
