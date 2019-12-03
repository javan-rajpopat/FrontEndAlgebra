import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { linearEquationUnitOverview } from '../../assets/Data/linearEquation/unitOverview';
import { plusMinusUnitOverview} from '../../assets/Data/plusMinus/unitOverview';
import { ElementFinder } from 'protractor';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-independent',
  templateUrl: './independent.component.html',
  styleUrls: ['./independent.component.css']
})


export class IndependentComponent implements OnInit {
  [x: string]: any;

  public href: string = "";
  public parameters;
  currentTab: string = "Home"
  unitOverviewData : any;
  exampleMenuL: string[] = [];
  exampleMenuR: string[] = [];
  exampleMenuOpen: number = 0;
  menuItemSelected: any;
  examples: any ;
  linearEquation: boolean;
  examplesArrayLeft: string[] = [];
  examplesArrayRight: string[] = [];


  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.parameters = this.location.path();

    if(this.parameters.includes("linearEquation")){
      this.linearEquation = true;
    }else if(this.parameters.includes("plusMinus")){
      this.linearEquation = false;
    }


    if(this.parameters.includes("introVideo")){
      this.currentTab = "IntroVideo";
    }else if(this.parameters.includes("unitOverView")){
      this.currentTab = "UnitOverView";
      this.unitOverviewData = this.linearEquation ? linearEquationUnitOverview : plusMinusUnitOverview;
    }else if(this.parameters.includes("examples")){
      this.currentTab = "Examples";
      this.examples = this.linearEquation ? this.readStringFromFileAtPath('./assets/Data/linearEquation/config.txt') : this.readStringFromFileAtPath('./assets/Data/plusMinus/config.txt');
      this.makeExamples();
      console.log(this.examples);
    }else if(this.parameters.includes("home")){
      this.currentTab = "Home";
    }else if(this.parameters.includes("quiz")){
      this.currentTab = "Quiz";
      this.examples = this.linearEquation ? this.readStringFromFileAtPath('./assets/Data/linearEquation/config.txt') : this.readStringFromFileAtPath('./assets/Data/plusMinus/config.txt');
      this.makeExamples();
      console.log(this.examples);
    }
  }

  onClick(menu: number){
    if(menu === this.exampleMenuOpen){
      this.exampleMenuOpen = 0;
      return;
    }
    if(menu === 1){
      this.exampleMenuL = this.examplesArrayLeft;
      this.exampleMenuR = this.examplesArrayRight;
      this.exampleMenuOpen = 1;
      console.log(this.exampleMenuL);
    }else if(menu === 2){
      this.exampleMenuL = this.examplesArrayLeft;
      this.exampleMenuR = this.examplesArrayRight;
      this.exampleMenuOpen = 2;
    }else if(menu === 3){
      this.exampleMenuL = this.examplesArrayLeft;
      this.exampleMenuR = this.examplesArrayRight;
      this.exampleMenuOpen = 3;
    }
  }

  makeExamples(){
    let e = false;
    let templ = '';
    let tempr = '';
    let count = 0;
    for(let i = 0; i < this.examples.length; i ++){
      if(this.examples[i] === '&'){
        this.examplesArrayLeft[count] = templ;
        this.examplesArrayRight[count] = tempr;
        e = false;
        templ = '';
        tempr = '';
        count += 1;
        continue;
      }
      if(this.examples[i] === '='){
        e = !e;
        continue;
      }
      if(!e){
        templ += this.examples[i];
      }else{
        tempr += this.examples[i];
      }
    }
    this.examplesArrayLeft[count] = templ;
    this.examplesArrayRight[count] = tempr;
  }

  readStringFromFileAtPath (pathOfFileToReadFrom)
  {
      var request = new XMLHttpRequest();
      request.open("GET", pathOfFileToReadFrom, false);
      request.send(null);
      var returnValue = request.responseText;

      return returnValue;
  }

  menuOptionSelected(item: any){
    this.menuItemSelectedL = this.exampleMenuL[item];
    this.menuItemSelectedR = this.exampleMenuR[item];

  }

}
