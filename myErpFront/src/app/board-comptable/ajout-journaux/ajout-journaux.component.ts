import { Component } from '@angular/core';
import { JournauxserviceService } from '../../services/journauxservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, NgxEditorConfig, schema, toDoc, toHTML } from 'ngx-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-ajout-journaux',
  templateUrl: './ajout-journaux.component.html',
  styleUrls: ['./ajout-journaux.component.css']
})
export class AjoutJournauxComponent {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['bold', 'italic'],
    ['fontSize']
  ]
}
  form: FormGroup = new FormGroup({
    libelle : new FormControl ('',Validators.required),
    rapport : new FormControl ('',Validators.required)
   })
  constructor(private journauxserviceService: JournauxserviceService) { }

  ngOnInit() {}
  submit() {
    console.log(this.form.value)
    if (this.form.valid) {

      this.journauxserviceService.create(this.form.value).subscribe(res => console.log(res))
    }
  
  }
  reset() {
    this.form.reset();
  }

}
