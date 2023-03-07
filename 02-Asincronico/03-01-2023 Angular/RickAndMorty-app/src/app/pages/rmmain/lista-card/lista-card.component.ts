import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/shared/models/characterModel';
import { InfoModel } from 'src/app/shared/models/infoModel';
import { CharacterCardService } from 'src/app/shared/services/character-card.service';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.css'],
})
export class ListaCardComponent {
  lista: CharacterModel[] = [];
  info: InfoModel;
  constructor(private personjesSrv: CharacterCardService) {}

  ngOnInit(): void {
    this.getPersonajes('https://rickandmortyapi.com/api/character');
  }

  next(): void {
    this.getPersonajes(this.info.next);
  }
  preview(): void {
    this.getPersonajes(this.info.prev);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getPersonajes(url: string) {
    this.personjesSrv.getPersonajes(url).subscribe((data: any) => {
      this.lista = [];
      const { info, results } = data;
      this.lista = [...this.lista, ...results];
      this.info = info;
    });
  }
}
