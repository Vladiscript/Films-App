import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setTheme(theme) {
    localStorage.setItem('darkTheme', JSON.stringify(theme))
  }
  getTheme() {
    const theme = localStorage.getItem('darkTheme')
    return JSON.parse(theme)
  }
  setView(view) {
    localStorage.setItem('view', JSON.stringify(view))
  }
  getView() {
    const view = localStorage.getItem('view')
    return JSON.parse(view)
  }
}
