import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from './text';
import { from } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TextService {
  selectedText:Text;
  texts:Text[]
  constructor(private http:HttpClient) { 
    this.selectedText = new Text ()
  }
  getTexts(){
    return this.http.get('http://localhost:3000')
  }
  postText(text:Text){
    return this.http.post('http://localhost:3000', text)
  }
}
