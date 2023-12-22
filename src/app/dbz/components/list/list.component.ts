import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Gogeta',
      power: 15000
    }];

    //onDelete = Index value: number
    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter();

    onDeleteCharacter(index:number):void{
      //TODO emitir el ID del personaje
      this.onDelete.emit( index );
    }
}
