import { Component, OnInit, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'am-root',
  templateUrl: './app.component.html',
  host: {
    class: 'am-block am-h-full',
  },
})
export class AppComponent implements OnInit {
  title = 'angular';
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('api/v1/products').subscribe({
      next: (v) => console.log(v),
    });
  }
}
