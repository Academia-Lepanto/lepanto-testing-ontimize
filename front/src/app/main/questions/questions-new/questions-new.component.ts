import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OComboComponent, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-questions-new',
  templateUrl: './questions-new.component.html',
  styleUrls: ['./questions-new.component.css']
})
export class QuestionsNewComponent implements OnInit {

  protected categoryAptitudeService: OntimizeService;

  @ViewChild('formQuestion', { static: false }) formQuestion: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('aptitudeCombo', { static: false }) public aptitudeCombo: OComboComponent;
  @ViewChild('categoryCombo', { static: false }) public categoryCombo: OComboComponent;


  public imagesVisible = false;

  constructor(private formBuilder: FormBuilder, public injector: Injector) {
    this.categoryAptitudeService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    // Configuración del servicio Ontimize
    const conf = this.categoryAptitudeService.getDefaultServiceConfiguration('categoryAptitude');
    this.categoryAptitudeService.configureService(conf);
  }


  actionClick(event) {
    const selectedValue = this.aptitudeCombo.getValue();

    this.categoryAptitudeService.query({ id: event.id }, ['category_name', 'aptitude_name'], 'categoryAptitude').subscribe(res => {

      if (selectedValue == 'MEMORIA' || selectedValue == 'RA' || selectedValue == 'ESPACIAL' || selectedValue == 'ATENCIÓN' ||selectedValue == 'MEMORIA' || selectedValue == 'NUMÉRICO')  {
        this.imagesVisible = true;
      } else {
        this.imagesVisible = false;
      }
      if (res.data && res.data.length) {
        const filteredArray = res.data.filter(item => item.aptitude_name === selectedValue);
        this.categoryCombo.setDataArray(filteredArray)
      }
    });
  }

}