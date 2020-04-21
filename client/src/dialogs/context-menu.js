import {DialogController} from 'aurelia-dialog-lite';
import {inject} from 'aurelia-framework';

@inject(DialogController)
export class ContextMenu {
  constructor(controller) {
    this.controller = controller;
  }

  activate(model) {
    this.items = model.items;
    const {top, left, bottom, right} = model;
    const style = {};
    if (top) style.top = top + 'px';
    if (left) style.left = left + 'px';
    if (bottom) style.bottom = bottom + 'px';
    if (right) style.right = right + 'px';
    this.style = style;
  }

  clickItem(item) {
    if (item.href) {
      return true; // let browser handle the link
    }

    if (item.code) {
      this.controller.ok(item.code);
    }
  }
}
