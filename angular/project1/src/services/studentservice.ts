import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  students = [
    { name: 'Tahir', age: 21, roll: 34 },
    { name: 'Navanath', age: 22, roll: 12 },
    { name: 'Dikshant', age: 23, roll: 45 },
    { name: 'Haris', age: 21, roll: 26 },
  ];

  getStudents() {
    return this.students;
  }
}