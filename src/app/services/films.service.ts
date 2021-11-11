import { Injectable } from '@angular/core';
import { Film } from '../Types';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmsRef: AngularFireList<any>
  films$: Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]>

  isFavorite$: BehaviorSubject<null | boolean>

  constructor(private dataBase: AngularFireDatabase) {

    this.filmsRef = dataBase.list('films')
    // this.isFavorite$ = new BehaviorSubject(null as null | boolean)

    // this.films$ = this.isFavorite$.pipe(
    //   switchMap(fav => dataBase.list('/films', ref => fav ? ref.orderByChild('isFavorite').equalTo(fav) : ref).snapshotChanges()))
  }

  getFilms(): Observable<Film[]> {
    return this.filmsRef.snapshotChanges().pipe(
      map(changes => changes.map((f => ({ key: f.payload.key, ...f.payload.val() })))))
  }

  addFilm(film: Film): Observable<Film[]> {
    this.filmsRef.push(film)
    return this.filmsRef.valueChanges()
  }

  deleteFilm(key: any): Observable<Film[]> {
    this.filmsRef.remove(key)
    return this.filmsRef.valueChanges()
  }

  toggleFavorite(key: any, isFav: boolean): Observable<Film[]> {
    this.filmsRef.update(key, { isFavorite: isFav })
    return this.filmsRef.valueChanges()
  }

}
