import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'book' },
    { title: 'Personajes', url: '/personajes', icon: 'body' },
    { title: 'Momentos', url: '/momentos', icon: 'videocam' },
    { title: 'Acerca de', url: '/acerca', icon: 'help-circle' },
    { title: 'Opinion', url: '/vida', icon: 'finger-print' },
    { title: 'Contacto', url: '/contacto', icon: 'phone-portrait' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
