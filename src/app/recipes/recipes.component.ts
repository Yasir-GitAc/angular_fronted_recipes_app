import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RecipeStartComponent,CommonModule, RouterOutlet],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipeObject!: Recipe;


  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe)=>{
        this.recipeObject = recipe;
        console.log(this.recipeObject)
      }
    )
  }

}
