import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonAvatar,
  IonList,
  IonLabel, IonText, IonChip, IonButtons, IonSpinner, IonSearchbar, IonInput } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonSearchbar, IonSpinner, IonButtons, IonChip, IonText,
    IonLabel,
    IonList,
    IonAvatar,
    IonItem,
    IonButton,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage implements OnInit {
  private readonly PersonajesService = inject(PersonajesService);

  personajesArray: Personaje[] = [];

  constructor() {}

  ngOnInit(): void {
    this.PersonajesService.cargar().subscribe((personajes) => {
      this.personajesArray = personajes;
    });
  }

  cargarPorPagina(event: CustomEvent) {
    const paginaSeleccionada = event.detail.value;

    this.PersonajesService.cargar(paginaSeleccionada).subscribe((personajes) => {
      this.personajesArray = personajes;
    });
  }
}
