import { Component, OnInit, ViewChild } from '@angular/core';
import { ODateInputComponent, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  @ViewChild('formUser', { static: false }) formUser: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('endDateInput', { static: false }) public endDateInput: ODateInputComponent;


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

  updateMonth(event) {
    const selectedValue = this.endDateInput.getValue();
    const newDate = new Date(selectedValue);

    // Obtén el mes actual
    let currentMonth = newDate.getMonth();
    // Aumenta el mes en 1
    currentMonth++;
    // Verifica si el nuevo mes es diciembre
    if (currentMonth > 11) {
      // Establece el mes en enero y aumenta el año en 1
      currentMonth = 0;
      newDate.setFullYear(newDate.getFullYear() + 1);
    }
    // Actualiza el mes en el objeto Date
    newDate.setMonth(currentMonth);
    // Ahora, newDate contiene la fecha con el mes incrementado en 1
    this.endDateInput.setValue(newDate);
  }
}

