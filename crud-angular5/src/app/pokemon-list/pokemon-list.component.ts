import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  private pokemonData: any;

  constructor(private svc: PokemonService) {}

  ngOnInit() {
    this.svc.getPokemons().subscribe(data => {
      this.pokemonData = data;
    });
  }
}
