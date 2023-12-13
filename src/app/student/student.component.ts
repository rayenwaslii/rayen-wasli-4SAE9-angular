import { Component } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
selectStudent!:number
studentlist:Student[]=[  
  {  
    "id": 1,  
    "name": "Jack",  
    "email": "jack@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 2,  
    "name": "Peter",  
    "email": "peter@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 3,  
    "name": "Mary",  
    "email": "mary@gmail.com",  
    "gender": "female"  
  },  
  {  
    "id": 4,  
    "name": "Smith",  
    "email": "smith@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 5,  
    "name": "John",  
    "email": "john@gmail.com",  
    "gender": "male"  
  }  
]
stud: Student[] = [];
show(e: number) {
  let aux: Student[] = [];
  for (let i = 0; i < this.studentlist.length; i++) {
    if (this.studentlist[i].id == e) {
      aux.push(this.studentlist[i]);
    }
  }
  this.stud = aux;
}
}
