import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/Types';
import { faStar, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar as activeStar } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  constructor() { }

  @Input() film: Film = {
    name: '',
    image: '',
    release: '',
    isFavorite: false,
    date: null,
    description: '',
    boxOffice: ''
  }
  @Input() viewMode: string = 'grid'

  @Output() onDeleteFilm = new EventEmitter
  @Output() toggleFavorite = new EventEmitter


  activeStar = activeStar
  star = faStar
  faTrashAlt = faTrashAlt

  onDelete() {
    this.onDeleteFilm.emit()
  }
  onToggleFavorite(isFav: boolean) {
    this.toggleFavorite.emit(isFav)
  }

  toConvert(value: any) {
    let newValue = value;
    if (value >= 1000) {
      let suffixes = ["", "K$", "M$", "B$", "T$"];
      let suffixNum = Math.floor(("" + value).length / 3);
      let shortValue = 0
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision))
        let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
        if (dotLessShortValue.length <= 2) { break }
      }
      if (shortValue % 1 != 0) shortValue = +shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  }

  ngOnInit(): void {
  }

}
