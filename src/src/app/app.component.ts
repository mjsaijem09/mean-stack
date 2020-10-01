import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TextService } from './text.service'
import { Text } from './text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TextService]
})
export class AppComponent {
  constructor(public textService:TextService){}
    
  ngOnInit(){
    this.getTexts()
  }

    getTexts(){
      this.textService.getTexts()
      .subscribe(( res ) => {
        this.textService.texts = res as Text[];
      })
    }
    
    postText(textForm){
      this.textService.postText(textForm).subscribe( res => {
         this.getTexts();
         this.textService.selectedText = new Text()
       });
 }
}
