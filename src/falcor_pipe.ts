/// <reference path="../typings/tsd.d.ts" />
declare var falcor, window;
import {ChangeDetectorRef, Inject, Injectable, Pipe, PipeTransform, PipeOnDestroy} from 'angular2/angular2';

export const FALCOR_MODEL_URL = '/model.json';

@Injectable()
export class FalcorService {
  model:any;
  constructor(@Inject(FALCOR_MODEL_URL) url:string) {
    window.model = this.model = new falcor.Model({
      source: new falcor.HttpDataSource(url)
    });
  }
}

@Pipe({
  name: 'falcor'
})
export class FalcorPipe implements PipeTransform, PipeOnDestroy{
  private _subscription:any;
  private _latestValue:any;
  constructor(private _cdRef:ChangeDetectorRef, private _falcor:FalcorService) {
  }
  transform(input) {
    console.log('input', input);
    if (!this._subscription) {
      console.log('setting subscription');
      this._subscription = this._falcor.model
        .getValue(input)
        .subscribe(val => {
          console.log('got value!', val);
          this._latestValue = val;
          this._cdRef.markForCheck();
        });
      return null;
    }

    return this._latestValue;
  }

  onDestroy () {
    this._subscription.dispose();
  }
}

