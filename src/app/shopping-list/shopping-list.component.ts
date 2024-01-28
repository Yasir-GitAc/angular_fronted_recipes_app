import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients!: Ingredient[];

  constructor(private slService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }

}
