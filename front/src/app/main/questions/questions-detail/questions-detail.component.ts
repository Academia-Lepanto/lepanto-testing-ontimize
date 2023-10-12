import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OComboComponent, OFormComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.css']
})
export class QuestionsDetailComponent implements OnInit {

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
    if (this.categoryCombo.isEmpty) {
      if (selectedValue == 'MEMORIA' || selectedValue == 'R.A' || selectedValue == 'ESPACIAL' || selectedValue == 'ATENCIÓN' || selectedValue == 'MEMORIA' || selectedValue == 'NUMÉRICO') {
        this.imagesVisible = true;
      } else {
        this.imagesVisible = false;
      }
      this.categoryAptitudeService.query({ id: event.id }, ['category_name', 'aptitude_name'], 'categoryAptitude').subscribe(res => {
        if (res.data && res.data.length) {
          const filteredArray = res.data.filter(item => item.aptitude_name === selectedValue);
          this.categoryCombo.setDataArray(filteredArray)
        }
      });
    }
  }
}
