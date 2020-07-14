import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  users=[];
  admins=[];

  constructor() { }

  ngOnInit(): void {
  }
  pushUser(dataUser){
    this.users.push(dataUser);
  }
  onRemoveUser(item){
    this.users.splice(item,1);
  }


  pushAdmin(dataAdmin){
    this.admins.push(dataAdmin);
  }
  onRemoveAdmin(item){
    this.admins.splice(item,1);
  }

}
