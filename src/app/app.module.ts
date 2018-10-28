import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StartModule } from './start/start.module';
import { IngridientsModule } from './ingridients/ingridients.module';
import { RecipesModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngridientsService } from './shared/services/ingridients.service';
import { HttpIngridient } from './shared/services/basicIngridient.service';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    StartModule,
    IngridientsModule,
    RecipesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IngridientsService, HttpIngridient],
  bootstrap: [AppComponent],
})
export class AppModule { }
