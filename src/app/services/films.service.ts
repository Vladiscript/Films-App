import { Injectable } from '@angular/core';
import { Film } from '../Types';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmsRef: AngularFireList<any>
  films$: Observable<Film[]>


  constructor(private dataBase: AngularFireDatabase) {
    this.filmsRef = dataBase.list('films')

    this.films$ = this.filmsRef.snapshotChanges().pipe(
      map(changes => changes.map((f => ({ key: f.payload.key, ...f.payload.val() }))))
    )
  }

  getFilms(): Observable<Film[]> {
    return this.films$
  }

  addFilm(film: Film): Observable<Film[]> {
    this.filmsRef.push(film)
    return this.films$
  }

  deleteFilm(key: any): Observable<Film[]> {
    this.filmsRef.remove(key)
    return this.films$
  }

  toggleFavorite(key: any, isFav: boolean): Observable<Film[]> {
    this.filmsRef.update(key, { isFavorite: isFav })
    return this.films$
  }

}
