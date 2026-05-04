import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students: any;

  constructor(private studentservice: Studentservice) {}
  ngOnInit() {
    this.students = this.studentservice.getStudents();
    console.log(this.students);
  }
}
