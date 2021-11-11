import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() isDarkTheme: boolean = false

  @Output() toggleTheme: EventEmitter<boolean> = new EventEmitter

  faSun = faSun
  faMoon = faMoon
  faStar = faStar

  onToggle() {
    this.toggleTheme.emit(this.isDarkTheme)
  }

  ngOnInit(): void {
  }


}
