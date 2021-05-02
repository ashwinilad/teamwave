import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css']
})
export class StackoverflowComponent implements OnInit {
  errorMsg='';
  questionData: any;
  items : any;
  ownerData: any;
  constructor(private Dataservice: ResourcesService) { }

  ngOnInit(): void {
  }
  getAllQuestions(params: any) {
    if (params && params!== '') {
      const myUrl = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity" +"&intitle="+params+"&site=stackoverflow";
      this.Dataservice.getQuestions(myUrl).subscribe( data => {
         this.questionData = data;
        for ( this.items of this.questionData.items ) {
          this.ownerData = this.items.owner;
        }
      });
    } else {
      alert('Please enter the question')
    }
  }
}
