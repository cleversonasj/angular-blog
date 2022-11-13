import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  image: string = '';
  date: string = '';
  title: string = '';
  description: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){
    const result = fakeData.filter(article => (article.id == id))[0];
    console.log(result);
    this.title = result.title;
    this.description = result.description;
    this.image = result.image;
    this.date = result.date;
  }

}
