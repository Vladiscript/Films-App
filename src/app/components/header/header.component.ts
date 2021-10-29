import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title = 'Just Films';
  @Input() dark: boolean
  @Output() btnClick = new EventEmitter()

  ngOnInit(): void {
  }

  onToggle() {
    this.btnClick.emit()
  }

}
