import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/interfaces/pokeapi.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnChanges {

  @Input() data?: Result;
  @Input() selected: boolean = false;
  @Input() fullData?: Pokemon;
  @Output() clicked = new EventEmitter<string>();
  id: string = "0";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.extractInformation();
  }
  
  extractInformation() {
    if(this.data && this.data.url !== '') {
      this.id = this.data.url.substring(34,this.data.url.length-1)
      return
    }
    if(this.fullData) {
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1)
      this.data = {
        name: this.fullData.species.name,
        url: ""
      }
    }
  }

}
