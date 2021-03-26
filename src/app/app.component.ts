import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'git-demo';
  applicationName = 'git-demo-name';

  getData(): string {
    console.log('Getting data...');

    let a = 'fail';
    const b = 'b';
    const c = 'c';
    return 'Data';
  } 
}
