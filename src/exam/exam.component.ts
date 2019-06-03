import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.less']
})
export class ExamComponent implements OnInit {

  selectedStatus1 = {value: 0, name: '01.'};
  k=0;
  title = "";
  timeText :number = 10;

  timer;//定时器
  
  data1=[
    {name:'01.',value:'2018-2019赛季英超球队利物浦的赛季最佳排名是?'},
    {name:'02.',value:'2018-2019赛季西甲球队赫塔菲的赛季最佳排名是?'},
    {name:'03.',value:'2018-2019赛季德甲球队不莱梅的赛季最佳排名是?'},
    {name:'04.',value:'2018-2019赛季意甲球队热那亚的赛季最佳排名是?'},
    {name:'05.',value:'2018-2019赛季法甲波尔多球队的赛季最佳排名是?'},
  ];

  data2=[
    {name:'01.',value:'第一名'},
    {name:'02.',value:'第二名'},
    {name:'03.',value:'第三名'},
    {name:'04.',value:'第四名'},
  ];

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    
  }

  ngAfterViewInit()
  {
    this.k=0;
    this.title = this.data1[0].value;
    this.timer = setInterval(() => {
      //此处为需要定时执行的方法，2000为间隔的时间，单位是毫秒
         this.changeTimeText();
      },1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
   }
  
  changeTimeText() :void{
    if(this.timeText>0)
      this.timeText--;
    else
    {
      //this.timeText = 10;
      this.doNext();
    }
  }

  doExit()
  {
    this.router.navigateByUrl("/tabnav");
  }
   
  doNext()
  {
    console.log(this.data1[this.k].value);
    if(this.k<4)
    {
      this.k++;
      //跳转到下一个页面
      this.title = this.data1[this.k].value;
      this.timeText = 10;
      this.selectedStatus1 = {value: 0, name: '01.'};//清除选中状态
    }
    else
    {    
      this.router.navigateByUrl("/tabnav/examover");
    }
  }
}
