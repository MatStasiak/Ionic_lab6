import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConnaughtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
