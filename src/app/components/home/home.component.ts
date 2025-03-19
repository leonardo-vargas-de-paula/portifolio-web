import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { MainSectionComponent } from "../../shared/main-section/main-section.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
