import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;

@Output() selectItemEmit = new EventEmitter<void>();

onSelectItem(recipeName, recipeDescription, recipeImagePath){
this.selectItemEmit.emit();
}
  constructor() { }

  ngOnInit() {
  }

}
