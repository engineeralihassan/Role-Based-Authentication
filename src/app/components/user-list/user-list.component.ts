import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: string[] = ['id','name', 'email','gender','status','role','action'];
  users:any;
  dataSource:any;
  constructor(private service:AuthService){}
  ngOnInit(){
   this.LoasdUsers();
  }
  LoasdUsers(){
    this.service.GetAll().subscribe(data=>{
      console.log('data is ',data)
      this.users=data;
      this.dataSource=new MatTableDataSource(this.users);

    })

    
  }
  UpdateStatus(){
    console.log("updat");
  }

}
