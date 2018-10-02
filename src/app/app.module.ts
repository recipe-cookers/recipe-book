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
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { IngridientsService }   from './shared/services/ingridients.service';


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [IngridientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
