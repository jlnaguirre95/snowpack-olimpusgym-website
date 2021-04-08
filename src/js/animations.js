import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero-y', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
});

gsap.from('.animate-hero-x', {
    duration: 0.6,
    opacity: 0,
    x: 300,
    stagger: 0.3,
    delay: 1,
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate-services-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: 400,
});

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-membership-card', {
    scrollTrigger: '.animate-membership-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.animate-contact-box', {
    scrollTrigger: '.animate-contact-box',
    duration: 0.8,
    opacity: 0,
    y: 400,
});

gsap.from('.animate-contact', {
    scrollTrigger: '.animate-contact-box',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 2
});


