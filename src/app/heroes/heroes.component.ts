import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // === Public Properties ===
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Populates the Heroes Array via the HerosService's getHeroes() method.
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
