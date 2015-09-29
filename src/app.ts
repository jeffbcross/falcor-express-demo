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
    {{ 'genrelist[0].titles[0].name' | falcor | json }}

    <h2>Example 2</h2>
    {{ 'genrelist[0].name' | falcor | json }}
  `,
  pipes: [FalcorPipe]
})
class App {

}

bootstrap(App, [
  FalcorService,
  bind(FALCOR_MODEL_URL).toValue('/model.json')]);