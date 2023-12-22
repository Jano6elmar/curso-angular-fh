import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls:['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number  = 45;

  //un geter es algo que se ve como propiedad pero es un metodo
  get capitalizedName (): string {
    return this.name.toUpperCase();
  }
  //metodo
  public getheroDescription() :string{

    return `${ this.name} - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 30 ;
  }

  resetForm():void {
    this.name='IronMan';
    this.age = 45;
  }


}
