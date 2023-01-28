import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  displayedColumns: string[]= ['_id','first_name','last_name','email','gender'];
  dataSource :any;
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.getUsers().subscribe(data=>{
      console.log(data);
      this.dataSource =data;
    })
  }

}
