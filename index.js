import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;
// Using the public folder at the root of the project
app.use(express.static("public"));
// using the images folder at the route /images
app.use("/images", express.static("images"));
// Use express.son and express.urlencoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/", (request, response) => {
  //   response.send("this is a GET request at /");
  response.json(data);
});

// POST - express.json and express.urlencoded
app.post("/item", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

// GET - download method
app.get("/download", (request, response) => {
  response.download("images/mountain_2.jpg");
});
// GET - redirect method
app.get("/redirect", (request, response) => {
  response.redirect("http://www.linkedin.com");
});

// Chaining
app
  .route("/class")
  .get((request, response) => {
    // response.send("Retrieve class info");
    throw new Error();
  })
  .post((request, response) => {
    response.send("Create class info");
  })
  .put((request, response) => {
    response.send("Update class info");
  });

//  Route chaining
// GET
/* app.get("/class", (request, response) => {
  response.send("Retrieve class info");
}); */
// POST
/* app.post("/class", (request, response) => {
  response.send("Create claa info");
}); */
// PUT
/* app.put("/class", (request, response) => {
  response.send("Update class info");
}); */

// GET with next()
app.get(
  "/next",
  (request, response, next) => {
    console.log("the response will be sent by the next function");
    next();
  },
  (request, response) => {
    response.send("I just set up a route with  a second callback");
  }
);
// GET with routing parameters
app.get("/class/:id", (request, response) => {
  // console.log(request.params);
  // Middleware:    Access the routing parameters
  const studentId = Number(request.params.id);
  const student = data.filter((student) => student.id === studentId);
  // Everything above this line is middleware
  response.send(student);
});
// POST
app.post("/create", (request, response) => {
  response.send("this is a POST request at /create");
});
// PUT
app.put("/edit", (request, response) => {
  response.send("this is a PUT request at /edit");
});
// DELETE
app.delete("/delete", (request, response) => {
  response.send("this is a DELETE request at /delete");
});

// Error handler function
app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send("Something is broken");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
  //   console.log(data);
});
