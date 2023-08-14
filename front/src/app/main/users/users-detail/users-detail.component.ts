import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

 /* PARA COMBOS
 
 public arraySubscription: Object[] = [{
    key: 0,
    value: 'Normal'
  }, {
    key: 1,
    value: 'Premium'
  }];

  public arrayUser: Object[] = [{
    key: 0,
    value: 'admin'
  }, {
    key: 1,
    value: 'user'
  }];

  public getDataArraySubscripton(): any[] {
    return this.arraySubscription;
  }

  public getDataArrayUserType(): any[] {
    return this.arrayUser;
  }

  public getValueSimple(): any {
    return 2;
  } */


  constructor() { }

  ngOnInit() {
  }

}
