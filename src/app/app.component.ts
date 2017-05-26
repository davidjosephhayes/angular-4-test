import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [PhotoService],
   providers: [],
})
export class AppComponent implements OnInit {

  title: String = 'Angular 4 Test';

  ngOnInit() {

  }

  keyBuffer: number[] = [];
  sequence: number[] = [38,38,40,40,37,39,37,39,66,65];
  capture (e: KeyboardEvent): void {
    this.keyBuffer.push(e.keyCode);
    // console.log(this.keyBuffer, this.konami)
    while (this.keyBuffer.length>this.sequence.length) this.keyBuffer.shift();
    // console.log(this.keyBuffer.length,this.konami.length);
    if (this.keyBuffer.length!=this.sequence.length) return;
    let success = true;
    for (var i=0; i<this.keyBuffer.length; i++) {
      // console.log(this.keyBuffer[i],this.konami[i]);
      if (this.keyBuffer[i] != this.sequence[i]) {
        success = false;
        break;
      }
    }
    if (!success) return;
    alert('lame...  i played street fighter ii');
  }

}
