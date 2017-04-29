import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() loadRecipeEmit = new EventEmitter<number>();
	@Output() loadShoppingListEmit = new EventEmitter<any>();
loadRecipes(){
	this.loadRecipeEmit.emit(5);
}
  constructor() { }

  ngOnInit() {
  }

}
