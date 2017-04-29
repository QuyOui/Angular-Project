import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
@Component ({
	selector: 'app-shopping',
	templateUrl: './shopping.component.html',
	styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent{
ingredients: Ingredient[] = [
new Ingredient('Apples', 5),
new Ingredient('Tomotoes', 10)
];

addIngredient(addedIngredients: Ingredient){
this.ingredients.push(addedIngredients);
}
}
