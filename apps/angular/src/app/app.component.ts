import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'am-root',
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  title = 'angular';
}
