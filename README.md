# SFMOMA Artwork App

## Description

This interactive dashboard calls the SFMOMA API to retrieve and show various artwork and statistics from the museum's collection. The dashboard contains a series of graphs that call and return data based from the artwork and artists of the SFMOMA collection. It was created with minimal and clean material design. The site is also fully responsive for mobile viewing.

### Graphs

![graphs](./public/graphs.png)

* The first graph showcases the amount of collected art that was created in the last century.  Photography, Painting & Sculpture, and Architecture & Design are all accumulated on the graph throughout time. Users can hover over each section to understand which collected art relates to each portion.

* The second graph showcases the artist gender breakdown from the collection.  Users can hover over each piece of the graph in order to see the specific breakdown.

* The third graph shows a percentage breakdown of the collected art based by country: United States vs Europe.

### Artwork Query

![artwork](./public/artwork.png)

Users can also search for artwork based on keyword. A list of results will dynamically appear along with relevant high-level information about each piece.  Users can browse throughout the results and they may click on each piece to forward them back to the SFMOMA website which contains additional information about each piece.

## How to run this app

You can run this application by the following set of instructions:

1. `git clone git@github.com:erintherad/sfmoma_artist_app.git`
2. `cd` into directory and `npm i` to install all dependencies
3. `npm start` to compile and run on a local server
4. Go to the browser

## Technologies

* [React with Webpack](https://facebook.github.io/react/) for compiling
* [Sass](http://sass-lang.com/)/[Bootstrap](https://react-bootstrap.github.io/) for styling
* [Formidable Victory Library](https://formidable.com/open-source/victory/) for data visualization
* [Node](https://nodejs.org/en/)/[Express](https://expressjs.com/) back-end for routing
