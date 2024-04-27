import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daos-ws53-learning-center';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/learning/students', title: 'Students'},
    {path:'/about', title: 'About'}
  ]
}
