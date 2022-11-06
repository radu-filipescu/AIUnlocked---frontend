import { Component, OnInit } from '@angular/core';

import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Component({
  selector: 'app-code-builder',
  templateUrl: './code-builder.component.html',
  styleUrls: ['./code-builder.component.css']
})
export class CodeBuilderComponent implements OnInit {

  language = 'javascript';
  content = `for i in list:
                print(i)`;

  parameters_width: number = 50;
  code_width: number = 50;
  adjust_button_x: number = 48.5;

  mouseX = 0;

  constructor() { }

  ngOnInit() {
  }

  onDragStart(event) {
    this.mouseX = event.clientX;
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
  }

  onDrag(event) {
    if (event.clientX === 0) {
      return;
    }
    var offset = this.mouseX - event.clientX;
    //console.log(offset)
    if (this.parameters_width < 20 && offset > 0) {
      return;
    }
    if (this.code_width < 20 && offset < 0) {
      return;
    }

    var w = window.innerWidth;
    var offset_percentage = offset * 100 / w;

    this.parameters_width = this.parameters_width - offset_percentage;
    this.code_width = this.code_width + offset_percentage;
    this.adjust_button_x = this.adjust_button_x - offset_percentage;

    //this.mouseX = event.clientX;
    console.log("mouseX: " + this.mouseX + " " + "clientX: " + event.clientX);
    this.mouseX = event.clientX;
  }

  onDragEnd(event) {
    /*event.target.style.opacity = 1;*/
  }

}
