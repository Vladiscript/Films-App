import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/Types';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  @Input() isModalOpen: boolean = false

  @Output() onAddFilm: EventEmitter<Film> = new EventEmitter
  @Output() closeModal: EventEmitter<void> = new EventEmitter

  constructor(private sant: DomSanitizer) {
  }

  faFileImage = faFileImage

  form = new FormGroup({
    name: new FormControl('',
      Validators.required
    ),
    image: new FormControl(''),
    release: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4)
    ]),
    boxOffice: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('',
      Validators.maxLength(1000)),
    isFavorite: new FormControl('')
  })

  get name() {
    return this.form.get('name')
  }
  get release() {
    return this.form.get('release')
  }
  get boxOffice() {
    return this.form.get('boxOffice')
  }
  get description() {
    return this.form.get('description')
  }

  base64: string = ''
  imageUrl?: string
  fileSelected?: Blob

  onClose(e: any) {
    if (e.target.dataset.close == '') {
      this.closeModal.emit()
    }
    return
  }

  onSelectImage(e: any): void {

    const img = e.target.files[0]

    this.fileSelected = img
    this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string

    this._convertToBase64()
  }

  _convertToBase64() {
    let reader = new FileReader()
    reader.readAsDataURL(this.fileSelected as Blob)
    reader.onloadend = () => {
      this.base64 = reader.result as string
    }
  }

  resetForm() {
    this.form.reset()
    this.imageUrl = ''
  }

  onSubmit() {

    const formData = this.form.value

    const film: Film = {
      name: formData.name,
      image: this.base64,
      release: formData.release,
      boxOffice: formData.boxOffice,
      date: Date.now(),
      description: formData.description,
      isFavorite: formData.isFavorite
    }

    this.onAddFilm.emit(film)
    this.resetForm()
  }

  ngOnInit(): void {

  }
}
