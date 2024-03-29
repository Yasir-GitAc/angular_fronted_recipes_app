import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editItemIndex!: number;
  editItem!: Ingredient;


  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.slService.getIngredient(index)
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient)
    } else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset()

  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
