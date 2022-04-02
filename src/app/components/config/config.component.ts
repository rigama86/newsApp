import { Component } from '@angular/core';

const MAX_CATEGORIES = 5;

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  categoriesSelected :any[]= [];
  categoriesSize = 0;
  numberSeconds = 0;
  styleFont= 'font-arial'
  categories = [
                  {api:'business',view:'Negocios'},
                  {api:'entertainment',view:'Entretenimiento'},
                  {api:'general',view:'General'},
                  {api:'health',view:'Salud'},
                  {api:'science',view:'Ciencia'},
                  {api:'sports',view:'Deportes'},
                  {api:'technology',view:'Tecnologia'},
                ];

  constructor() { }

  selectionCategory = (category: any) => {
    this.categoriesSize = this.categoriesSelected.length;
    var exits = this.categoriesSelected.find( cat => cat.view === category.view );

    if(this.categoriesSelected.length === MAX_CATEGORIES && exits === undefined) {
      alert('No se pueden agregar mas de 5 categorias de noticias');
    }
    
    if ( exits === undefined && this.categoriesSelected.length < MAX_CATEGORIES) {
      this.categoriesSelected.push(category);
    } else {
      this.categoriesSelected = this.categoriesSelected.filter( (cat:any) => cat.view !== category.view );
    }
  }

  getFloor = (num:number) => {
    return Math.floor(num)
  }

  setFont =  (fontSyle:string) => {
    console.log(fontSyle)
    this.styleFont = `font-${fontSyle}`
  }

  saveConfig = () => {
    localStorage.setItem('secondsUpdate', this.numberSeconds.toString());
    localStorage.setItem('categories', JSON.stringify(this.categoriesSelected));
    localStorage.setItem('selectFont', this.styleFont);
  }

}
