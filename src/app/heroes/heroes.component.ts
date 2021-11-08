import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // === Public Properties ===
  public heroes: Array<Hero> = HEROES;
  public selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Event handler for Hero List Selection sets Selected Hero.
   * @param hero - The selected Hero from the list.
   */
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
