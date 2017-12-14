import { Note } from './../note';
import { NoteService } from './../note.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteNewComponent implements OnInit {
  newNote: Note = new Note();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(note: Note) {
    this._noteService.createNote(this.newNote);
    this.newNote = new Note();
  }

}