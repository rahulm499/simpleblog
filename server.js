const express = require("express");
require('./mongoose');
const Article = require('./models/article');
const methodOverride = require('method-override');

const articleRouter = require('./routes/articles');
const app = express();
app.set('view engine', 'ejs');
app.set("views", "views");
app.use(methodOverride('_method'));
app.use('/articles', articleRouter);
app.get('/', async (req, res)=>{
    const articles= await Article.find().sort({
        createdAt: "desc"
    });
    res.render('articles/index', {page: "Main", articles: articles});
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is Running");
});