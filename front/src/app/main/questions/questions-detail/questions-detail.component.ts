import { Component, Injector, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OComboComponent, OFormComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.css']
})
export class QuestionsDetailComponent implements OnInit, AfterViewInit {

  protected categoryAptitudeService: OntimizeService;

  @ViewChild('formQuestion', { static: false }) formQuestion: OFormComponent; // Referencia al componente OFormComponent
  @ViewChild('aptitudeCombo', { static: false }) public aptitudeCombo: OComboComponent;
  @ViewChild('categoryCombo', { static: false }) public categoryCombo: OComboComponent;

  public imagesVisible = false;

  constructor(private formBuilder: FormBuilder, public injector: Injector, private router: Router) {
    this.categoryAptitudeService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    // Código en ngOnInit para configuración del servicio
    const conf = this.categoryAptitudeService.getDefaultServiceConfiguration('categoryAptitude');
    this.categoryAptitudeService.configureService(conf);
  }

  ngAfterViewInit() {

  }

  actionClick(event) {
    const selectedValue = this.aptitudeCombo.getValue();
    if (this.categoryCombo.isEmpty) {
      if (selectedValue == 'MEMORIA' || selectedValue == 'RA' || selectedValue == 'ESPACIAL' || selectedValue == 'ATENCIÓN' || selectedValue == 'MEMORIA' || selectedValue == 'NUMÉRICO') {
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

  onClick(event: any): void {
    const questionCode = this.formQuestion.getFieldValue("question_code");
    console.log(questionCode);
    const url = `https://psicotecnicos.academialepanto.com/questionByCode/${questionCode}`;
    window.open(url, '_blank');
  }
}
