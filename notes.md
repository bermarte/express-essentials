# Notes

- Express is a node framework
- Express can use template languages to create HTML, like Jade, Pug, Mustache, EJS, Dust, HBS, HJS, Twig, Vash
- Express Application Generator is a package used to create the boilercode for an Express application. [link](https://expressjs.com/en/starter/generator.html)

## Run testapp

change directory:  
`$ cd testapp`

install dependencies:  
`$ npm install`

run the app:  
`$ DEBUG=testapp:* npm start`

## Run express essentials

change directory:  
`$ cd express_essentials`

install dependencies:  
`$ npm install`

run the app:  
`$ npm start`
`$ npm debug`

### routes availables

- localhost:3000
- localhost:3000/public/mountain_1.jpg
- localhost:3000/images/mountain_2.jpg
- localhost:3000/download
- localhost:3000/redirect
- localhost:3000/item (POST, send header and body in Postman { "item": "rollerblades"})
- localhost:3000/class (GET, POST, PUT)
- localhost:3000/next
- localhost:3000/class/:id

## tutorial

The tutorial is available on [Linkedin](https://www.linkedin.com/learning/express-essential-training-14539342/getting-started-server-and-project-setup)
