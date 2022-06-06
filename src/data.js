import ipAddressTracker from './assets/projectScreenShot/ip-address-tracker.png';
import urlShortner from './assets/projectScreenShot/url-shortner.png';
import ecommerce from './assets/projectScreenShot/e-commerce-page.png';
import jobListing from './assets/projectScreenShot/job-listings.png';
import todo from './assets/projectScreenShot/todo-app.png';
import interactiveComment from './assets/projectScreenShot/interactive-comment-section.png';
import launchCountdown from './assets/projectScreenShot/launch-countdown.png';
import movie from './assets/projectScreenShot/movie-app.png';

export const projects = [
  {
    id: 10,
    title: "Entertainment Movie App",
    details: "This website allows user to see list of trending, popular, top rated, top grossing, movies and TV series, user can search for any movie or TV Series of their choice, they can also view full details of a movie or TV series, user can also search movie or TV series based on their Genres",
    tools: ["NextJs", "Sass", "TMDB API"],
    website: "https://movie-app-jp.netlify.app/",
    github: "https://github.com/ElpidaHope/entertainment-web-app",
    image: movie
  },
  
  {
    id: 1,
    title: "Ip Address Tracker",
    details: "This website allows user to see their own IP address on a map on initial page load, user can also search for any IP address or domains and see the key information and location. I built this using the IP Geolocation API by IPify and the map was generated using LeafletJS",
    tools: ["React", "LeafletJs", "styled-components"],
    website: "https://elpidahope.github.io/ip-address-tracker/",
    github: "https://github.com/ElpidaHope/ip-address-tracker",
    image: ipAddressTracker
  },

  {
    id: 2,
    title: "URL Shortener",
    details: "This website allows user to create shortened URLs for any valid URL, the user is able to see a list of shortened URL even after refreshing the browser, user can also copy the shortened link to their clipboard in a single click",
    tools: ["React", "styled-components", "shrtcodeAPI"],
    website: "https://elpidahope.github.io/url-shortening-app/",
    github: "https://github.com/ElpidaHope/url-shortening-app",
    image: urlShortner
  },

  {
    id: 3,
    title: "E-Commerce Product Page",
    details: "A single Page ecommerce website consisting of a lightbox gallery which can be opened by clicking on a large product, the large product can be switched by clicking on small thumbnails images, user can also add item to cart, view cart and remove item from cart ",
    tools: ["React", "CSS"],
    website: "https://elpidahope.github.io/ecommerce-product-page/",
    github: "https://github.com/ElpidaHope/ecommerce-product-page",
    image: ecommerce
  },

  {
    id: 4,
    title: "Advance TODO List",
    details: "An advanced todo list that allow user to  add new todos, mark todos as complete, delete todos, filter todo by all/active/complete, clear all completed todos, also with a light and dark mode",
    tools: ["React", "Context API", "CSS"],
    website: "https://elpidahope.github.io/todo-app/",
    github: "https://github.com/ElpidaHope/todo-app",
    image: todo
  },

  {
    id: 5,
    title: "Interactive Comments Section",
    details: "An interactive comment section that allow user to create, read, update and delete comments and replies, user can also upvote and downvote comments",
    tools: ["React", "Context API", "CSS"],
    website: "https://elpidahope.github.io/interactive-comment-section/",
    github: "https://github.com/ElpidaHope/interactive-comment-section",
    image: interactiveComment
  },

  {
    id: 6,
    title: "Job Listings Filtering",
    details: "A responsive single Page website that allow user filter job listings based on the categories selected",
    tools: ["React", "CSS", "Context API"],
    website: "https://elpidahope.github.io/static-job-lisiting/",
    github: "https://github.com/ElpidaHope/static-job-lisiting",
    image: jobListing
  },

  {
    id: 7,
    title: "Launch Countdown timer",
    details: "A live countdown timer that ticks down every second",
    tools: ["React", "CSS"],
    website: "https://elpidahope.github.io/launch-countdwon-timer/",
    github: "https://github.com/ElpidaHope/launch-countdwon-timer",
    image: launchCountdown
  },
]