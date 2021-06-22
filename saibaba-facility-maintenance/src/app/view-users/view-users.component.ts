import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service.client';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.viewUsers().then(res => {
      this.users = res;
      console.log(this.users);
    });
  }

}
