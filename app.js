const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

var Items = ["Buy food","Cook Food","Eat Food"]; 

app.get('/', (req, res) => {
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    var day = today.toLocaleDateString("en-US", option);
    res.render("list", {
        kindOfDay: day,
        newItems: Items,
    });
});
app.post('/', (req, res) => {
     Item = req.body.newitem;
     Items.push(Item);
    res.redirect("/");
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});