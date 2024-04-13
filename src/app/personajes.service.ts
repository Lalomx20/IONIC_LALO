import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface PersonajesResult {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Personaje[];
}

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private readonly http = inject(HttpClient);

  constructor() {}

  cargar(pagina: number = 1) {
    return this.http
      .get<PersonajesResult>('https://rickandmortyapi.com/api/character')
      .pipe(map((respuesta) => respuesta.results));
  }
}
