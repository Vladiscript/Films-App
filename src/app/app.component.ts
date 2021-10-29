import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean
  constructor(private localStorageService: LocalStorageService) { }
  toggleTheme() {
    this.darkTheme = !this.darkTheme
    this.localStorageService.setTheme(this.darkTheme)
  }
  ngOnInit(): void {
    this.darkTheme = this.localStorageService.getTheme()
  }
}
