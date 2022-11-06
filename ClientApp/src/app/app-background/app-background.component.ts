import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-background',
  templateUrl: './app-background.component.html',
  styleUrls: ['./app-background.component.css']
})
export class AppBackgroundComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
