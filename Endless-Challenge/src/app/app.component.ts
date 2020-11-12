import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Endless-Challenge';
  result: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getResponse();
  }

  getResponse() {
    this.dataService.getData().subscribe((res:any) => {
      this.result = res;
      this.result.sort(function(a,b) {
        return a.stepNumber - b.stepNumber;
      });

      for(let j = 0; j < this.result.length; j++) {
        this.result[j].versionContent.sort(function(a,b) {
          return (b.effectiveDate < a.effectiveDate) ? -1 : ((b.effectiveDate > a.effectiveDate) ? 1 : 0);
        });
      }
    })
  }
}

