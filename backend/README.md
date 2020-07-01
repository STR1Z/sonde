# A functional approach for API integration.

## Usage Backend

```javascript
const sonde = require("sonde");

sonde.hello = () => {
  return {
    message: "world";
  };
};

sonde.greetings = (name) => {
    return `Greetings ${name}. This is from Sonde or in english, Probe.`
}

// With Express Framework, but feel free to use anything you want.

// Express Setup here. BodyParser is required to parse the body into JSON.

app.get("/sondeapi", (req, res) => {
  res.json(sonde(req.body.name, ...req.body.args));
  // req.body.name : name of the "function" called.
  // req.body.args : arguments of the "function" called.
});
```

## Usage Frontend

```HTML
<!-- in the head -->
<script src="https://cdn.jsdelivr.net/gh/STR1Z/Sonde/sonde.js"></script>

<!-- fetching from the backend -->
<h1 sonde="hello">{{hello.message}}</h1>
<!-- "hello" is the "function" name. -->
```

```javascript
// in javascript code...
sonde("greetings", "George").then((res) => console.log(res));
// Hooray for Promises
```
