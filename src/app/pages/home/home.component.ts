import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Result } from 'src/app/interfaces/pokeapi.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('cards') cardsElement!:ElementRef;
  constructor(private pokemonService: PokemonService) { }

  pokemonList: Result[] = [];
  page: number = 1;
  loading: boolean = false;

  ngOnInit(): void {

    this.loadList();

  }

  async loadList() {
    if(this.loading) return;
    this.loading = true;
    this.pokemonList = [...this.pokemonList, ...await this.pokemonService.getByPage(this.page)];
    // console.log(this.pokemonList);
    this.page++;
    this.loading = false;
  }

  onScroll(e: any) {
    // console.log(event);
    if(
      Math.round(
      this.cardsElement.nativeElement.clientHeight + this.cardsElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight){
        this.loadList()
      }
  }

}
