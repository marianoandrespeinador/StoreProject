import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        //con slice obtengo una copia del arreglo, no la referencia.
        return this.ingredients.slice();
    }

    insertIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    insertIngredients(ingredients: Ingredient[]) {
        //el siguiente (...) es un ES6 Spread operator, que pasa el array como una serie de parametros, en lugar de un solo parametro
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
