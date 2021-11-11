import { Injectable } from '@angular/core';
import { View } from '../Types';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setTheme(theme: boolean) {
    localStorage.setItem('isDarkTheme', JSON.stringify(theme))
  }
  getTheme() {
    const theme = localStorage.getItem('isDarkTheme') as string
    return JSON.parse(theme)

  }
  setView(view: View) {
    localStorage.setItem('view', JSON.stringify(view))
  }
  getView() {
    const view = localStorage.getItem('view') as string
    return JSON.parse(view)
  }
}
