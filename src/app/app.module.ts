import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { PreloaderComponent } from './components/preloader/preloader.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsComponent,
    FilmItemComponent,
    FilmFormComponent,
    ToolbarComponent,
    FilterPipe,
    SortPipe,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
