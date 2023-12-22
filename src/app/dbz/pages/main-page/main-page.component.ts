import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  public characters: Character[] = [{
    name:'Janemba',
    power: 14000
  },
  {
    name:'Paikuhan',
    power: 12000
},
{
  name: 'kaioshin',
  power:25000
}];

onNewCharacter(character:Character ):void{
  this.characters.push(character);
}

onDeleteCharacter(index:number) {
  this.characters.splice(index,1);
}

}
