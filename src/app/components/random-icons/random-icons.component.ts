import { Component, OnInit } from '@angular/core';
import {faIcons} from '@fortawesome/free-solid-svg-icons';
import {icons} from './icons'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-random-icons',
  templateUrl: './random-icons.component.html',
  styleUrls: ['./random-icons.component.css'],
})
export class RandomIconsComponent implements OnInit{
  icon!: string;


  ngOnInit(): void {
  };
 
  testIcon = faIcons;
  
  text: string | undefined;

  showRandomIcon() {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * icons.length);
      this.icon = icons[randomIndex];
      console.log(this.icon);
      this.text = this.icon;
    }, 3000);
  }
}



  
