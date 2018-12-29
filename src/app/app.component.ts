import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  //title = 'Angular';
  post ={
    title:'Angular',
    isFavorite:true
  }
  onClickFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed"+eventArgs);
  }
}
