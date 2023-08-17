import { Component, OnInit, ViewChild } from '@angular/core';
import { OComboComponent, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-questions-new',
  templateUrl: './questions-new.component.html',
  styleUrls: ['./questions-new.component.css']
})
export class QuestionsNewComponent implements OnInit {

  @ViewChild('formQuestion', { static: false }) formQuestion: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('aptitudeCombo', { static: false }) public aptitudeCombo: OComboComponent;
  
  constructor() { }

  ngOnInit() {

  }


  onAptitudeChange(event: any) {
    // Obtener el valor seleccionado del combo
    const selectedValue = this.aptitudeCombo.getValue();

    // Establecer el valor en el campo de texto
    console.log(selectedValue);
  }
}
