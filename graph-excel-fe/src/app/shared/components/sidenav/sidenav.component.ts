import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getModules } from './sidenav.schema';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  url: string;
  modules = getModules();
  module: string;
  navLinks: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.module = this.router.url.substring(1).split('/')[0];
    this.getNavLinks(this.module);
  }

  getNavLinks(module) {
    this.navLinks = this.modules[module].navLinks;
  }

  switchActive(event: any) {
    event.target.classList.add('active');
  }

}
