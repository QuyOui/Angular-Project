import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() loadPageEmit = new EventEmitter<string>();

onClickMenu(page: string){
	this.loadPageEmit.emit(page);
}
  constructor() { }

  ngOnInit() {
  }

}
