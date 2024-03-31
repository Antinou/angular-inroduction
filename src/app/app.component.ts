import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Antigoni';

  person ={
    givenName: 'Antigoni',
    surName: 'Nousia',
    age: 29,
    email: 'anti_nou@hotmail.com',
  };
}
