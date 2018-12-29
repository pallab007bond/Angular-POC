import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles:[
    
    `.fa-database{
      color:blue;
    }
    ` ]
   // styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent 
{
  @Input() isFavorite:boolean;
  @Output('change') click = new EventEmitter();
  onClick()
  {
     this.isFavorite = !this.isFavorite;
     this.click.emit({newValue:this.isFavorite});
  }     
}
export interface FavoriteChangedEventArgs{
     newValue : boolean;   
}
