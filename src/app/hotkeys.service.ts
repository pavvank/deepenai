import { Injectable, Inject } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

type Options = {
  element: any;
  index: number;
  keys: string;
}

@Injectable({ providedIn: 'root' })
export class Hotkeys {
  public hotkeys = new Map();
  defaults: Partial<Options> = {
    element: this.document
  }

  constructor(private eventManager: EventManager,
    @Inject(DOCUMENT) private document: Document) {
  }

  addShortcut(options: Partial<Options>) {
    const merged = { ...this.defaults, ...options };
    const event = `keydown.${merged.keys}`;

    merged.index && this.hotkeys.set(merged.keys, merged.index);

    return new Observable(observer => {
      const handler = (e) => {
        e.preventDefault()
        // observer.next(e);
        observer.next(options);
      };

      const dispose = this.eventManager.addEventListener(
        merged.element, event, handler
      );

      return () => {
        dispose();
        this.hotkeys.delete(merged.keys);
      };
    })
  }
}