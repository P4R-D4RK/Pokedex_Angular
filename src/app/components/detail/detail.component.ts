import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() pokemon?: Pokemon;
  @Input() open?: boolean = false;
  @Output() clicked = new EventEmitter();
  description: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescription(this.pokemon?.id).then((res) => {
        this.description = res;
        // console.log(res);
      });
    }
  }

  ngOnInit(): void {}
}
