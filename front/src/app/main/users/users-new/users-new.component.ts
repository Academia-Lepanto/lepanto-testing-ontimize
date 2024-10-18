import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OFormComponent, OPasswordInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {


  protected userService: OntimizeService;
  @ViewChild('formNewUser', { static: false }) formNewUser: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('passwordInput', { static: false }) public passwordInput: OPasswordInputComponent;

  // Define una variable para almacenar la contraseña
  public enteredPassword: string = '';
  public password: string = '';

  /*   public arraySubscription: Object[] = [{
      key: 'Normal',
      value: 'Normal'
    }, {
      key: 'Premium',
      value: 'Premium'
    }];
  
    public arrayUser: Object[] = [{
      key: 'admin',
      value: 'admin'
    }, {
      key: 'user',
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
    }  */


  constructor(private formBuilder: FormBuilder, public injector: Injector) {
    this.userService = this.injector.get(OntimizeService);
  }


  ngOnInit() {
    // Configuración del servicio Ontimize
    const conf = this.userService.getDefaultServiceConfiguration('userService');
    this.userService.configureService(conf);
  }


/* ENCRIPTACION BCRYPT  
 async getPassword(password) {
    // Accede al valor del campo de contraseña
    password = this.formNewUser.formGroup.get('password').value;
    // Almacena el valor en la variable
    this.enteredPassword = password;
    const saltRounds = 10; // Número de rondas de sal (cuanto mayor, más seguro)
    const hashedPassword = await bcrypt.hash(this.enteredPassword, saltRounds);
    console.log(hashedPassword);
    this.formNewUser.formGroup.get('password').setValue(hashedPassword);
  } */

}
