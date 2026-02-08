import type { Hero } from './hero.interface';

export interface SummaryInformation {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}
