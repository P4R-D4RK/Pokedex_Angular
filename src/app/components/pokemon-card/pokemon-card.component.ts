import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Result } from 'src/app/interfaces/pokeapi.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnChanges {

  @Input() data?: Result;
  id: string = "0";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.extractInformation();
  }
  
  extractInformation() {
    if(this.data) {
      this.id = this.data.url.substring(34,this.data.url.length-1)
    }
  }

}
