import { Component } from '@angular/core';
import {homeExcelLogo} from '../../shared/ImagesRule/imagesRule';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router) {}
  homeExcelLogo:string = homeExcelLogo;

  goToExcel() {
    let navigateUrl:string = "export-excel";
    this.router.navigate([`${navigateUrl}`]).then(r => console.log(r));
  }
}
