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
  public selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Event handler for Hero List Selection sets Selected Hero.
   * @param hero - The selected Hero from the list.
   */
  onSelect(hero: Hero) {
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
    this.selectedHero = hero;
  }

  /**
   * Populates the Heroes Array via the HerosService's getHeroes() method.
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
