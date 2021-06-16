import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fmusers',
  templateUrl: './fmusers.component.html',
  styleUrls: ['./fmusers.component.css']
})
export class FmusersComponent implements OnInit {
  user = {firstname: '', lastname: '', email: '', phone: ''};



  constructor() { }

  ngOnInit(): void {
    console.log()
  }

  submitUser = () => {

    console.log(this.user);
  }

}
