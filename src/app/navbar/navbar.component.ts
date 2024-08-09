import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  currentLanguage: string = 'en'; // Default language

  constructor(private translationService: TranslationService) { }

  toggleNav() {
    this.sidenav.toggle();
  }

  switchToLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'te' : 'en'; // Toggle between 'en' and 'te'
    this.translationService.setLanguage(this.currentLanguage); //  language in translation service
  }

  getLanguageButtonText() {
    return this.currentLanguage === 'en' ? 'తెలుగు' : 'English'; // Return text based on current language
  }
}
