import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  items: any[] = [];

  constructor() {
      this.items = [
        {
          name: 'GitHub',
          description: 'We used GitHub for version control and to efficiently work on the app from several devices at once without' +
          ' interrupting one another\'s work. Here is our repository: ',
          imageURL: 'https://image.flaticon.com/icons/svg/25/25231.svg',
          link: 'https://github.com/pastranakike/ivoluntee'
        },
        {
          name: 'HTML/CSS/TypeScript',
          description: 'We used these tools to create and work on the final website product, building it and organizing it from scratch.',
          imageURL: 'https://image.freepik.com/free-icon/html-file-with-code-symbol_318-45756.jpg',
        },
        {
          name: 'Visual Studio Code',
          description: 'We used Visual Studio as our platform of choice for working on the website\'s HTML, CSS and TypeScript.',
          imageURL: 'http://img13.deviantart.net/cb8e/i/2012/344/9/1/flurry_ios_visual_studio_2012_replacement_' +
          'icon_by_flakshack-d5nnelp.png',
        },
        {
          name: 'Angular 4',
          description: 'We used this platform to finalize our web application\'s front-end from the work we had' +
          ' done in Visual Studio. With this, we made our initially static website into a web app.',
          imageURL: 'https://www.creative-tim.com/assets/icon-angular-ada038f93d6763f80ca9d1776d103783.jpg'
        },
        {
          name: 'Firebase',
          description: 'We used Firebase to use and manage the user\'s authentification information.',
          imageURL: 'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png'
        },
        {
          name: 'Python',
          description: 'We used Python to link the MongoDB and Firebase databases with the front-end and to code the ' +
          'servers running the application\'s back-end with Flask.',
          imageURL: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png',
        },
        {
          name: 'MongoDB',
          description: 'We used MongoDB to store the information users provide us with when using the web application.',
          imageURL: 'http://voidcanvas.com/wp-content/uploads/2015/06/mongodb.png',
        },
        {
          name: 'Flask',
          description: 'We used the Flask RESTful API in order to create a server that would allow interaction ' +
          'between users and the web application.',
          imageURL: 'http://www.unixstickers.com/image/data/stickers/flask/Flask-logo.sh.png',
        }
      ];
    }

  ngOnInit() {
  }

}
