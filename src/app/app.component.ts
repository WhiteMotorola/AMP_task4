import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  private berries;

  private x;
  private y;

  constructor (private el: ElementRef) {
    this.berries = el.nativeElement;
    this.berries.style.position = 'fixed';
  }

  _moveAt (event, x, y) {
    this.berries.style.left = event.pageX - x + 'px';
    this.berries.style.top = event.pageY - y + 'px';
  }

  onMouseDown (event) {

    this.x = event.pageX - this.berries.getBoundingClientRect().left;
    this.y = event.pageY - this.berries.getBoundingClientRect().top;

    document.body.appendChild(this.berries);
    this._moveAt(event, this.x, this.y);
    document.onmousemove = (e) => this._moveAt(e, this.x, this.y);
  }

  onMouseUp () {
    document.onmousemove = null;
  }

  onDragStart () {
    return false;
  }

}
