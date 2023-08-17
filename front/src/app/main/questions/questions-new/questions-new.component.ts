import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-new',
  templateUrl: './questions-new.component.html',
  styleUrls: ['./questions-new.component.css']
})
export class QuestionsNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const aptitudeCombo = document.getElementById('aptitudeCombo') as HTMLSelectElement;
    const categoryCombo = document.getElementById('categoryCombo') as HTMLSelectElement;

    aptitudeCombo.addEventListener('change', () => {
      const selectedAptitudeId = aptitudeCombo.value;

      // Simulando una llamada a un servicio para obtener las categorías basadas en la aptitud seleccionada
      const categories = [
        { aptitude_id: '1', category_name: 'Category A' },
        { aptitude_id: '1', category_name: 'Category B' },
        { aptitude_id: '2', category_name: 'Category C' },
        // ... Agrega más categorías según la aptitud seleccionada
      ];

      // Filtrar las categorías basadas en la aptitud seleccionada
      const filteredCategories = categories.filter(category => category.aptitude_id === selectedAptitudeId);

      // Agregar nuevas opciones al combo de categorías
      filteredCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.aptitude_id;
        option.textContent = category.category_name;
        categoryCombo.appendChild(option);
      });
    });
  }
}
