import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonButtons],
})
export class HomePage {
  constructor() {}
}
