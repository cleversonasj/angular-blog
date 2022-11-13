import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  cards: {id: number, image: string, date: string, title: string, description: string}[] = [
    {
      id: 2,
      image: 'https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/051/Web_development_-_Main.png',
      date: '15/10/2022',
      title: 'Startup são ótimas opções para iniciar uma carreira',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl.'
    },
    {
      id: 3,
      image: 'https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg',
      date: '12/05/2022',
      title: 'Mercado de tecnologia em alta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl.'
    },
    {
      id: 4,
      image: 'https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill-825x469.jpg',
      date: '14/02/2022',
      title: 'Back-end ou Front-end?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
