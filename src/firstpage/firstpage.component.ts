import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { extname } from 'path';

@Component({
  selector: 'firstpage',
  templateUrl: './firstpage.component.html'
})
export class FirstPageComponent {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '10%'
  };

  constructor(private router: Router)
  {
    
  }

  data_texts=['生活','娱乐','体育','文学','休闲','百科','知道'];
  data = Array.from(new Array(6)).map((_val, i) => ({
    icon: '/assets/logo.svg',
    text: this.data_texts[i]
  }));

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }

  click(event) {
    console.log(event.data.text);
    this.router.navigateByUrl("/tabnav/exam");
  }
}
