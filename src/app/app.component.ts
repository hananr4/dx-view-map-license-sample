import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// // import { DxButtonModule } from 'devextreme-angular';
//  import DevExpress from 'devextreme';
//  import { licenseKey } from '../devextreme-key';

// DevExpress.config({
//   licenseKey: licenseKey
// });


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})

export class AppComponent {
  AppComponent() {

    

  }
}
