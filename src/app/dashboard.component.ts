import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    //template: '<h3>Top Heroes</h3>'
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => {this.heroes = heroes.slice(1, 5);console.log(this.heroes)});
    }
}