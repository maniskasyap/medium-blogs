import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";

const appRoutes: Routes = [
  {
    path: "pokemons",
    component: PokemonListComponent
  },
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
