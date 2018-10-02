import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StartModule } from './start/start.module';
import { IngridientsModule } from './ingridients/ingridients.module';
import { RecipesModule } from './recipes/recipes.module';
import { DetailsModule } from './details/details.module';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { IngridientsService }   from './shared/services/ingridients.service';
=======
import {AppRoutingModule} from './app-routing.module';
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060


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
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
=======
    AppRoutingModule
>>>>>>> 5ea0db85783e1e8b67ed0a5c0412501b492cf060
  ],
  providers: [IngridientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
