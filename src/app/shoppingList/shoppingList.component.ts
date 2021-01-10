

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html'
})

export class ShoppingListComponent implements OnInit{
    ingredients: Ingredient[] =[
        new Ingredient("Flour", 4),
        new Ingredient('Apples', 5)
    ];

    constructor() {

    }

    ngOnInit() {

    }
}