import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string = "Philip Kerschner";
    contact: string = "Address | Phone | Email"
    technologies: string[] = [
      "C#", "Java", "SQL", "Git", "GitHub", "EF", "Spring", 
      "WebAPI", "HTML", "CSS", "Bootstrap", "TypeScript", "JavaScript", "Angular", 
      "Visual Studio"
    ];
    workHistories = [
      {
        role: "Associate Contract Administrator",
        duration: "2018 to 2021",
        accomplishments: [
          "Managed contracts",
          "Submitted quotes"
        ]
      },
      {
        role: "Assembler",
        duration: "2015 to 2018",
        accomplishments: [
          "Developed processes",
          "Assembled and tested products"         
        ]
      }
    ];
    education = [
      {
        school: "North Central State College",
        degree: "Business"
      }
    ];
}
