import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Film, View } from 'src/app/Types';
import { FilmsService } from 'src/app/services/films.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private filmsService: FilmsService, private router: Router) {
  }

  films$: Observable<Film[]> = this.filmsService.getFilms()

  favoritesFilms$: Observable<Film[]> = this.filmsService.getFilms().pipe(
    map((films: Film[]) => {
      return films.filter(f => f.isFavorite)
    })
  )


  isFavorites: boolean = false
  isModalaOpen: boolean = false

  view: View = 'grid'

  searchTerm: string = ''
  sortingBy: string = 'date'
  isReverseSorting: boolean = false


  setViewMode(view: View) {
    this.view = view
    this.localStorageService.setView(view)
  }

  addFilm(film: Film) {
    this.filmsService.addFilm(film).subscribe()
    this.closeModal()
  }

  deleteFilm(key: string) {
    this.filmsService.deleteFilm(key).subscribe()
  }

  toggleFavorite(key: string, isFav: boolean) {
    this.filmsService.toggleFavorite(key, isFav).subscribe()
  }

  sortFilmsBy(value: string) {
    this.sortingBy = value
  }

  toggleReverseSorting() {
    this.isReverseSorting = !this.isReverseSorting
  }

  openModal() {
    this.isModalaOpen = true
  }

  closeModal() {
    this.isModalaOpen = false
  }


  ngOnInit(): void {
    this.view = this.localStorageService.getView()
    // this.filmsService.getFilms().subscribe(films => this.films = films)

    this.router.url === '/favorites' ? this.isFavorites = true : this.isFavorites = false
  }
}