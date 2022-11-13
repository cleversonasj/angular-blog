import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  card: {id: number,image: string, date: string, title: string, description: string} = {
    id: 1,
    image: 'https://img.freepik.com/vetores-gratis/desenvolvedores-web-desenhados-a-mao_23-2148819604.jpg?w=2000',
    date: '12/11/2012',
    title: 'Mercado em alta para Desenvolvedores',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl eget nisl.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
