import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StartModule } from './start/start.module';
import { IngridientsModule } from './ingridients/ingridients.module';
import { RecipesModule } from './recipes/recipes.module';
import { DetailsModule } from './details/details.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    StartModule,
    IngridientsModule,
    RecipesModule,
    DetailsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
