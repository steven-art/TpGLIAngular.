import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService],
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokeId: string;
  searchPokeName = '';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail;
  myDate: Date;
  checked = true;
  constructor(
    private pokeService: PokeAPIServiceService,
    private pokeShareInfoService: PokeShareInfoService
  ) {
    // this.pokes.push(new Pokemon('1','Bulbizarre'));
    // this.pokes.push(new Pokemon('2','Herbizarre'));
    // this.pokes.push(new Pokemon('3','Florizarre'));
    // this.pokes.push(new Pokemon('4','Salamèche'));
    // this.pokes.push(new Pokemon('5','Reptincel'));
    // this.pokes.push(new Pokemon('6','Dracaufeu'));
    // this.pokes.push(new Pokemon('151','Mew'));
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }
  go() {
    this.pokeShareInfoService.setValue(this.selectedPokeId);
    if (this.selectedPokeId !== '') {
      this.pokeService
        .getPokemonsInfo(this.selectedPokeId)
        .subscribe((data) => (this.pokeDetail = data));
    }
  }
}
