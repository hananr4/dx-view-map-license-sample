import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DxButtonModule } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DxButtonModule],
  templateUrl: './app.component.html',
})

export class AppComponent {
  AppComponent() {

  }
}
