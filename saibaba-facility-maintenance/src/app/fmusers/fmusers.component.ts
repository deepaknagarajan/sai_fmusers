import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service.client';

@Component({
  selector: 'app-fmusers',
  templateUrl: './fmusers.component.html',
  styleUrls: ['./fmusers.component.css']
})
export class FmusersComponent implements OnInit {
  user = {firstname: '', lastname: '', email: '', phone: ''};



  constructor(private appService: AppService) {
    
  }

  ngOnInit(): void {
    console.log()
  }

  submitUser = () => {
    // let user = {
      // firstname: this.user.firstname,
      // lastname: this.user.lastname,
      // email: this.user.email,
      // phone: this.user.phone,
    // };
    // console.log(user);
    // this.appService.addUser(user);
    console.log(this.user);
    this.appService.addUser(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
