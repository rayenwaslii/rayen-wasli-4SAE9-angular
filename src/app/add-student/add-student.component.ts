import { Component, EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  id=0;
  studform!:FormGroup;
  
  constructor(private activateroute:ActivatedRoute){
  
  }
  ngOnInit():void{
    this.id=this.activateroute.snapshot.params['id'];
  this.studform=new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', Validators.required)
      });
    }
    
  get name(){return this.studform.get('name')}
  get email(){return this.studform.get('email')}
  get gender(){return this.studform.get('gender')}
 
  add(){
    console.log("my form"+JSON.stringify(this.studform.value))
  }
}
