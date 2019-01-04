import { Component } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './da-slide/css/style.css', './fontawesome/css/all.css']
})
export class AppComponent {
  title = 'Bill\'s Resume';
  introHeader = 'I develop website, software, and studying Machine Learning.\n Yes, I love Technology.';
  introContent = 'Experienced Quality Assurance and Software Engineer \
  with a demonstrated history of working in the Information Technology Industry. \
  Skilled in Java, MySQL, Python, Full-Stack Web Development with Angular, etc. Currently pursuing \
  a Dual Degree Program (BEng in Computer Science & BBA Business Management) from the Hong Kong University \
  of Science and Technology.';

  aboutMeHeader = 'I am Bill, HKUST Year 3 Computer Science Major Student';
  aboutMeContent = 'Had several working experiences in different fields of Software Enginnering: \
  Full-stack Web Development, Full-stack Java Software Development, Excel VBA Script Development, etc.';

  javaDevelopmentContent = [
    'Designed, Implemented and Refactored the SQLite Database required for the tool used to conduct DDQS Workflow testing on the Ground Transportation Main Control System.',
    'Completed Full-stack Java Implementation of Test Automated Tool for Thales using JavaFX and Hibernate'
  ];
  angularDevelopmentContent = [
    'Developed Web-solution for monitoring Thales Equipments\' data. Utilized Angular 5 + Bootstrap for Front-End Implementation, STOMP WebSocket Interface for establishing back-end connection with SCADASoft connector. ',
    'Implemented Personal Resume Website for Demonstration.'
  ];
  pythonDevelopmentContent = [
    'Proficient in using Pandas and SkLearn to conduct data analysis.',
    'Constructed GUI-based Application (Tkinter & SkLearn) for automatically performing Grid-Search (Model Parameter Tuning) on text-mining related task. ',
    'Able to perform data analysis task with R.'
  ];

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) { return b; }
        if (t === d) { return b + c; }
        if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }
}
