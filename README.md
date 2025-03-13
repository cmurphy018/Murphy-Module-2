# Murphy-Module-2

This is a Single Page Application (SPA) image gallery built using HTML, CSS, and JavaScript. 
It dynamically loads images and metadata from a JSON file and displays them interactively.

## Features
- Displays a gallery of images dynamically loaded from `data.json`
- Shows additional details (artist, place, year) on hover
- Deployed on Netlify for easy access

## Live Demo
View the live project here: [My Favorite Art Pieces](https://murphy-module-2.netlify.app/)

## How it Works/JSON Structure
1. The project fetches image metadata from `data/data.json` using `fetch()`.
2. JavaScript dynamically creates `<img>` elements and displays them in the gallery.
3. When users hover over an image, an overlay appears showing the title, artist, place, and year.
4. The images and their metadata are stored in `data/data.json` in the following format:

```json
[
  {
    "id": 1,
    "title": "The Kiss",
    "artist": "Gustav Klimt",
    "place": "Vienna, Austria",
    "year": 1908,
    "imageURL": "images/the-kiss.jpg"
  }
]
