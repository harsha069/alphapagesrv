import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  ObjectId : any;
  myform! : FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private helperService: HelperService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.ObjectId = this.activatedRoute.snapshot.paramMap.get('id');
    this.myform = this._fb.group({
      email :'',
      pwd :'',
      first_name : '',
      last_name: '',
      gender : '',
    })
    console.log(this.ObjectId)
    this.helperService.getUserById(this.ObjectId).subscribe((data:any) => {
      console.log(data);
      this.myform.setValue({
        email : data[0]?.email,
        pwd : data[0]?.pwd,
        first_name : data[0]?.first_name,
        last_name : data[0]?.last_name,
        gender : data[0]?.gender
      })
    })
  }
  
  Update(){
    this.helperService.updateUserById(this.ObjectId, this.myform.value).subscribe(data=>{
      console.log(data);
      alert('UPDATED THE INFO !!!');
      this.router.navigate(['read']);
    })
  }

  Delete(){
    this.helperService.deleteUserById(this.ObjectId).subscribe(data=>{
      alert('Deleted the user !!!')
      this.router.navigate(['login']);
    })
  }
}
