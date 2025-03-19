import { Component } from '@angular/core';
import { MainImageComponent } from "../main-image/main-image.component";
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";

@Component({
  selector: 'app-main-section',
  imports: [MainImageComponent, ButtonPrimaryComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
