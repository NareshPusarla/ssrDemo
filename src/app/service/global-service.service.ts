import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  [x: string]: any;

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  getWindow(): Window | any {
    return this.doc.defaultView;
  }

  getLocation(): Location {
    return this.doc.location;
  }

  createElement(tag: string): HTMLElement {
    return this.doc.createElement(tag);
  }
}
