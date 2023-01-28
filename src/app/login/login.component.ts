import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform!:FormGroup;

  constructor(private _fb:FormBuilder,private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.getUsers().subscribe(data=>{
      console.log(data);
    })
    this.myform=this._fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      gender:['', Validators.required],
      email:['', Validators.compose([Validators.required,Validators.email])],
      pwd:['', Validators.required],
    })

  }

  submit(){
    console.log(this.myform.value);
    this.helperService.postNewUser(this.myform.value).subscribe(data=>{
      console.log(data);
      alert('SUCCESS!!');
    })
  }
  
}
