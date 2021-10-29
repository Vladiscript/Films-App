import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  view: 'list' | 'plates'

  setViewMode(view) {
    this.view = view
    this.localStorageService.setView(view)
  }

  ngOnInit(): void {
    this.view = this.localStorageService.getView()

  }

}
