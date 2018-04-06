import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');

    translate.use('pt');
  }

  changeLanguage(language) {
    this.translate.use(language);
  }

}
