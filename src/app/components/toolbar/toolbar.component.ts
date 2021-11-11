import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Film, View } from 'src/app/Types';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  @Input() isReverseSorting: boolean = false
  @Input() view: string = 'grid'


  @Output() setViewMode: EventEmitter<View> = new EventEmitter
  @Output() onOpenModal: EventEmitter<View> = new EventEmitter

  @Output() sortFilmsBy: EventEmitter<string> = new EventEmitter
  @Output() toggleReverseSorting: EventEmitter<boolean> = new EventEmitter


  faLongArrowAltUp = faLongArrowAltUp
  faTh = faTh
  faList = faList

  setView(view: View) {
    this.setViewMode.emit(view)
  }

  sortBy(e: any) {
    const value = e.target.value

    this.sortFilmsBy.emit(value)
  }

  onToggle() {
    this.toggleReverseSorting.emit()

  }
  onOpen() {
    this.onOpenModal.emit()
  }

  ngOnInit(): void {
  }

}
