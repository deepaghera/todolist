const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    var day = today.toLocaleDateString("en-US", option);
    res.render("list", {
        kindOfDay: day
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});