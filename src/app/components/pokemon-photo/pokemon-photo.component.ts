import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
@Component({
  selector: 'app-pokemon-photo',
  templateUrl: './pokemon-photo.component.html',
  styleUrls: ['./pokemon-photo.component.scss']
})
export class PokemonPhotoComponent  {

  @Input() pokemon?:Pokemon;
}
