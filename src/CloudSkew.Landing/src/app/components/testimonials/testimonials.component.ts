import { Component } from '@angular/core';
import { TestimonialItem } from './testimonialItem';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  //
  testimonialItems: TestimonialItem[] = [
    {
      name: 'Wesley Haakman',
      job: 'Microsoft MVP | Lead Architect @ Intercept',
      testimonial: `"I absolutely fell in love with CloudSkew. Things you need are.. just.. there.."`,
      artwork: '../../../assets/triangle-icon.svg',
      liveUrl: 'https://twitter.com/whaakman/status/1370035551231967235',
    },
    {
      name: 'Anand Kumar R',
      job: 'Cloud Solution Architect @ Microsoft',
      testimonial: `"So I used cloudskew.com for the first time and it was a breeze, super easy and intuitive to create architecture diagrams! Love it."`,
      artwork: '../../../assets/square-icon.svg',
      liveUrl: 'https://twitter.com/ranand12/status/1278370886198886406',
    },
    {
      name: 'Dan Clarke',
      job: 'Microsoft MVP | Developer @ EverStack',
      testimonial: `"Wow, CloudSkew by @MithunShanbhag is a really nice online diagramming tool with tons of built-in dev icons (Azure, K8S, programming langs, etc, etc)..."`,
      artwork: '../../../assets/plus-icon.svg',
      liveUrl: 'https://twitter.com/dracan/status/1306108161007509504',
    },
    {
      name: 'Swaminathan Vetri',
      job: 'Microsoft MVP | Architect @ Maersk',
      testimonial: `"CloudSkew is a super cool product. Neat and clean to draw cloud arch diagrams. Kudos to @MithunShanbhag for this great product."`,
      artwork: '../../../assets/ellipse-icon.svg',
      liveUrl: 'https://twitter.com/svswaminathan/status/1224358759364845569',
    },
    {
      name: 'Mike Rodrick',
      job: 'Edutainer @ ITProTV',
      testimonial: `If you need to make Azure architecture diagrams, give CloudSkew a try, this tool is awesome!`,
      artwork: '../../../assets/square-icon.svg',
      liveUrl: 'https://twitter.com/Mike_ITProTV/status/1219711202370170881',
    },
    {
      name: 'Sathyajit Bhat',
      job: 'AWS Community Hero | DevOps @ Adobe',
      testimonial: `"Cloudskew from @MithunShanbhag is a fantastic tool for drawing out cloud architectures. I've used it couple of times and found it very handy."`,
      artwork: '../../../assets/multiply-icon.svg',
      liveUrl: 'https://twitter.com/SathyaBhat/status/1275800008747515905',
    },
  ];

  constructor() { }
}
