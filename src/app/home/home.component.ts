import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PopupService } from '../popup.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  handPicked: any[] = [];
  upcoming = [];
  nearby = [];
  orgs: any[] = [];
  percentage = 0;
  score = 0;
  quotes: string[] = ['../../../assets/MLKQuote.png',
    './../../assets/VOL1.png',
    './../../assets/VOL2.png',
    './../../assets/VOL3.png',
    './../../assets/VOL4.png',
    './../../assets/VOL5.png',
    './../../assets/VOL6.png',
    './../../assets/VOL7.png',
  ];
  currPic = '';
  name = '';

  constructor(private auth: AuthService, private popup: PopupService, private http: HttpService) {
    for (let i = 0; i < 3; i++) {
      this.orgs.push({
        name: 'ForTheKids',
        description: 'An Atlanta based foundation with the only purpose of guarantee a better future for the future of our nation',
        type: 'Child Support',
        orgsID: '7',
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61cVLQVvG9L.jpg',
        subscribers: 10004
      });
      this.orgs.push({
        name: 'Green Peace',
        description: 'Greenpeace will never stop fighting for a greener, healthier world for our oceans,' +
        ' forests, food, climate, and democracy.',
        type: 'Enviromental NGO',
        orgsID: '8',
        imageURL: 'https://www.greenpeace.org.uk/wp-content/themes/greenpeaceuk/static/img/default-thumbnail.jpg',
        subscribers: 438221
      });
      this.orgs.push({
        name: 'Unicef',
        description: 'The United Nations Children\'s Funds is a strong advocate for human rights, working to give hope' +
        ' and good living standards to kids all over the world..',
        type: 'Children NGO',
        orgsID: '8',
        imageURL: 'https://viquarsite.files.wordpress.com/2016/08/unicef.png',
        subscribers: 785643
      });
      this.orgs.push({
        name: 'CARE',
        description: 'CARE is a major humanitarian agency which focuses on delivering help around the world through' +
        ' delivering international projects and emergency help.',
        type: 'Humanitarian NGO',
        orgsID: '8',
        imageURL: 'http://www.care.org/sites/all/themes/CARE/images/care-social-image.jpg',
        subscribers: 268437
      });
    }
    this.auth.getAuthState().subscribe(
      (user) => {
        if (!user) {
          this.name = '';
          return;
        }
        this.name = user.displayName;
        this.updateInfo();
      }
    );
  }

  public giveMePics(): string {
    return this.quotes[Math.floor(Math.random() * 7)];
  }

  ngOnInit() {
    this.currPic = this.giveMePics();
  }

  updateInfo() {
    alert('update infooooooo');
    this.http.getFeed().subscribe((value) => {
      console.log(value);
      this.percentage = value['my-percentage'];
      this.score = value['my-score'];
      for (const event of value['events-handpicked']) {
        this.handPicked.push(JSON.parse(event));
      }
      for (const event of value['events-upcoming']) {
        this.upcoming.push(JSON.parse(event));
      }
      for (const event of value['events-nearby']) {
        this.nearby.push(JSON.parse(event));
      }
    });
  }

  showPopup() {
    this.popup.setPopupVisibility(true);
  }

}
