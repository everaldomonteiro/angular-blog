import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCover:string = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
  @Input()
  cardTitle:string = "nova serie anunciada"
  @Input()
  cardDescription = "mavel estudios anuncia novo homem de ferro"
  @Input()
  Id:string = "0"
  
  ngOnInit(): void {

  }

}
