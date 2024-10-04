import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroeNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Cap.America', 'Deadpool'];
  public deletedHero?: string;
  removeLastHero():void{
    this.deletedHero = this.heroeNames.pop();

  }




}


