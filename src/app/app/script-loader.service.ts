import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import EasePack from 'gsap/EasePack';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, Draggable, EasePack, CSSRulePlugin);

import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  testFunction() {
    console.log('Test function in ScriptLoaderService');
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }

  testFunction() {
    console.log('Test function in ScriptLoaderService');
  }
}
