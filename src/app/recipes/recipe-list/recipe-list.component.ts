import { Component} from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes!: Recipe[];

  constructor(private recipeServise: RecipeService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.recipeServise.getRecipes()
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
