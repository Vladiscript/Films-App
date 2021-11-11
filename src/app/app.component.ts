import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { View } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService) { }

  isDarkTheme: boolean = false
  title: string = ''


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
    this.localStorageService.setTheme(this.isDarkTheme)
  }
  ngOnInit(): void {
    this.isDarkTheme = this.localStorageService.getTheme()
  }
}
