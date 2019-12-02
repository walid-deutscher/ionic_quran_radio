import { Component } from '@angular/core';
import{ QuranService ,QuranOptions} from '../api/quran.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
quran:QuranOptions={title:"",currentTime:"",duration:"",
isStopped:true,isplaying:false,iswaiting:false,link_mp3:""};
Soura:any;
data:{} ;
  constructor(private quranService:QuranService ) {

 this.data=this.quranService.getQuranitems();

 
 
    
  }

  play(){
     
     
   if(this.quran.currentTime){
    this.pause();
   }

  
 
    this.quran.link_mp3="/assets/quran/quran/"+this.quran.title+".mp3";
    this.Soura=new Audio(this.quran.link_mp3);
   
    
    
    this.Soura.addEventListener("timeupdate", () => {
      console.log(this.Soura.duration);
          this.quran.currentTime= this.parseTime(this.Soura.currentTime);
         this.quran.duration=this.parseTime(this.Soura.duration);
         if(this.quran.duration===this.quran.currentTime){
           this.pause();
   
         }
       });

 
    this.quran.isStopped=false;
    this.quran.iswaiting=true;
    setTimeout( () => {
      this.Soura.play();
      this.quran.iswaiting=false;
      this.quran.isplaying=true;

      try{
 
 }
 catch{
  this.pause();
 }
  }, 0);
  }
  

  pause(){
    try {
     
    } catch (error) {
      
    }
    
    this.Soura.pause();
  this.showPauselogot();
 
  }



  showPauselogot(){
    this.quran.isStopped=false;
    this.quran.isplaying=false;
    this.quran.iswaiting=false;
  }
  parseTime(time = "0.00") {
    if (time) {
      const partTime = parseInt(time.toString().split(".")[0], 10);

      let minutes = Math.floor(partTime / 60).toString();
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }

}
