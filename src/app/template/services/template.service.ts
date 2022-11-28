import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  selectProvincia=new EventEmitter<any>();
  constructor(
  ) { }
}