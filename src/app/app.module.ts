import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import {RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { ShoppingListEditComponent } from './shoppingList/shoppingListEdit/shoppingListEdit.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
