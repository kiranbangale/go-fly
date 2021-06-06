import { Component, OnInit } from '@angular/core';
import { TABS } from 'src/app/constants/tabs.const';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs = TABS;
  constructor() { }

  ngOnInit(): void {
  }

  returnZero() {
    return 0
  }

}
