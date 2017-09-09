import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-list/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cookie'
            , 'This is simply a test Cookie'
            , 'http://static.wixstatic.com/media/95a490_57eb937130ac42a780f50927cb34ec0e~mv2_d_1280_1280_s_2.jpg_256'
            , [
                new Ingredient('Avena', 1),
                new Ingredient('Chocolate', 10)
              ]),
        new Recipe('Brownie'
            , 'This is test Brownie'
            , 'https://static.wixstatic.com/media/87f810_d83a1a2a408f4d2d8c12e082dda020f0~mv2.jpg_256'
            , [
                new Ingredient('Harina', 1),
                new Ingredient('Chocolate', 10),
                new Ingredient('Weed', 10)
              ])
    ];
    
    getRecipes() {
        //Arrays and objects are reference types in JavaScript (==  TypesScript)
        return this.recipes;
    }

}
