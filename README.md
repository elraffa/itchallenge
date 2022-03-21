# IT Crowd Challenge

This is my solution to the challenge. App is deployed with Heroku on https://itchallenge-fr.herokuapp.com/build
To test locally clone this repo and run 

## Backend

Backend was developed in **Node.js** using **Express**. The endpoint api/products was created. It accepts HTTP requests via GET, POST, PUT and DELETE methods. I have set up a database in MongoDB for testing. All products have an id, name, description, image_url and price. Images are retrieved from an external source (https://unsplash.com). For server development I am using the libraries concurrently, dotenv, express, cors and mongoose to create models to help connecting to the database.
Requests have been tested with Postman. As per initial instructions, no authorization is required to access these endpoints. 
- All products can be fetched via GET request to https://itchallenge-fr.herokuapp.com/api/products
- A new product can be added to the database through a POST request to https://itchallenge-fr.herokuapp.com/api/products sending a JSON trough the body of the request with name, description, image_url and price
- A product can be deleted with a DELETE request to https://itchallenge-fr.herokuapp.com/api/products/:id where id is the id of each product.
- A PUT request to the same endpoint can be made to change a products features if it exists.

## Frontend

The Frontend was created with React using create-react-app as a starter. I am using axios to fetch products from the API and react-router-dom version 5.2.0 for routing. For styling I have used plain CSS. Layout was done with grid using a mobile first approach, using media queries with breakpoints for tablets and desktop. Each product can be clicked for a detailed view page, that points to the id of that product. 

## Todo

I have aimed to resolve the basic requirements for the assignment. With some more time to complete I could try to resolve the extras suggested, such as authorization using middleware and JWT for token management, add a second model, improvements to the UI, etc.
