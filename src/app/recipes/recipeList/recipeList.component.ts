

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipeList.component.html'
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'simply a test', 'https://images.unsplash.com/photo-1606787619180-fac5ebe67ad8?ixid=MXwxMjA3fDF8MHxzZWFyY2h8OXx8cmVjaXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
        new Recipe('Johnny New York Pizza','pizza','https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' )
    ];


    constructor(){

    }

    ngOnInit() {

    }

}