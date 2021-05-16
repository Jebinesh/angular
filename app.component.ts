import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  // submitted: boolean;
  firstpage = true;
  constructor(private router:Router){}
  
  previous(e) {
    this.firstpage = true;
    // this.router.navigate(['/app1']);  // define your component where you want to go
  }
  next() {
    this.firstpage = false;
    // this.router.navigate(['/app2'])
  }

  // submit(){
  //   alert("Submitted");
  //   this.submitted=true;
  // }

}
