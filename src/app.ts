/// <reference path="../typings/tsd.d.ts" />
import {bind, bootstrap, Component, ChangeDetectionStrategy, View} from 'angular2/angular2';
import {FalcorPipe, FalcorService, FALCOR_MODEL_URL} from './falcor_pipe';

@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush
})
@View({
  template: `
    <h2>Example 1</h2>
    {{ 'genrelist[0..5].titles[0..5].name' | falcor | json }}

    <h2>Example 2</h2>
    {{ 'genrelist[0].name' | falcor | json }}

    <h2>Example 3</h2>
    {{ 'titlesById[-1]["userRating", "name"]' | falcor | json }}

    <h2>Example 4</h2>
    {{ 'titlesById[26,5,4].userRating' | falcor | json }}

    <h2>Example 5</h2>
    {{ 'titlesById[3,4,5]["name", "year", "description"]' | falcor | json }}

    <h2>Example 6</h2>
    {{ 'genrelist[10].titles.length' | falcor | json }}

    <h2>Example 7</h2>
    {{ 'genrelist[10].titles[0..10]["name", "year", "boxshot"]' | falcor | json }}

    <h2>Example 8</h2>
    {{ 'genrelist[0].titles[0]' | falcor | json }}

    <h2>Example 9</h2>
    {{ 'genrelist.length' | falcor | json }}

    <h2>Example 10</h2>
    {{ 'titlesById[1]["userRating", "rating"]' | falcor | json }}

    <h2>Example 11</h2>
    {{ 'titlesById[0, 1, 2, 3]["year", "rating", "userRating"]' | falcor | json }}

    <h2>Example 12</h2>
    {{ 'titlesById[1234].userRating' | falcor | json }}

    <h2>Example 13</h2>
    {{ 'genrelist.myList.name' | falcor | json }}

    <h2>Example 14</h2>
    {{ 'genrelist.myList.titles[0..1]["name", "boxshot", "rating", "userRating"' | falcor | json }}

    <h2>Example 15</h2>
    {{ 'genrelist.myList.titles.length' | falcor | json }}
  `,
  pipes: [FalcorPipe]
})
class App {

}

bootstrap(App, [
  FalcorService,
  bind(FALCOR_MODEL_URL).toValue('/model.json')]);