const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

let Items = ["Buy food", "Cook Food", "Eat Food"];
let Workitem = [];
app.get('/', (req, res) => {
    let today = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    let day = today.toLocaleDateString("en-US", option);
    res.render("list", {
        listTitle: day,
        newItems: Items,
    });
});
app.post('/', (req, res) => {
    console.log(req.body);
    Item = req.body.newitem;
    if (req.body.list === 'Work') {

        Workitem.push(Item);
        res.redirect("/work");
    } else {

        Items.push(Item);
        res.redirect("/");
    }

});
app.get('/work', (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newItems: Workitem
    });
});
app.post('/work', (req, res) => {
    let item = req.body.newitem;
    Workitem.push(item);
    res.redirect('/work');
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});