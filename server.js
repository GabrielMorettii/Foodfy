const express = require('express');
const nunjucks = require('nunjucks');
const recipe = require('./data.js')

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
})

server.get('/', function(req,res){
    return res.render('index', {items: recipe});
})

server.get('/about', function(req,res){
    return res.render('about');
})

server.get('/recipe', function(req,res){
    return res.render('recipe', {items: recipe});
})

server.get("/recipe/:index", function (req, res) {
    const recipes = [recipe[0],recipe[1],recipe[2],recipe[3],recipe[4],recipe[5]];
    const recipeIndex = req.params.index;
    return res.render("details", {script: recipes[recipeIndex]})
  })

server.listen(5000, function(){
    console.log('Server is running');
})

/*
window.location.href = `/video?id=${videoId}`

server.get('/about', function(req,res){
    const about = {
        img: 'https://miro.medium.com/max/1200/1*fs0ScMc45X9QEwno8G414A.png',
        title: 'RocketSeat',
        text: "Lorem ipsum dolor sit amet consectetuadipisicing elit",
        tecnologys: ['CSS', 'HTML', 'JS', 'React', 'Node'],
        links: [
            { name: 'Site', url: 'https:/rocketseat.com.br/'},
            { name: 'Instagram',url: 'https://www.instagram.com/rocketseat_oficial/?hl=en'},
            { name: 'Facebook',url: 'https://www.facebook.com/rocketseat/'},
        ]
    } 

    return res.render('about', { about})
})

server.get("/video", function(req,res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.movie == id
    })
    
    if(!video){
        return res.send('Video not found')
    }

    return res.render("video", { item: video })
})


*/


/*{% extends "layout.njk" %}

{% block meta %}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
        <title> Courses </title>
 {% endblock %}

 {% block content %}
    <header>
        <a href="/about">Sobre</a>
        <a href="/">Aulas</a>
        <a href="contents.html">Conteúdos</a>
    </header>
    <section class="cards">

        {% for item in items %}
        <div class="card {{'featurecondition' if item.featured}}" id="{{item.id}}"" movie="{{item.movie}}">

                <div class="image">
                    <img src="https://programadorbr.com/Images/{{item.id}}.png" alt="Imagem de {{item.title}}">
                </div>
                {% if item.featured %}
                        <div class="featured">Featured</div>
                {% endif %}
                <div class="text">
                    <p> {{item.title}}</p>
                </div>
                <div class="info">
                    <p>{{item.duration}}</p>
                <p class="price">
                    {{item.price}}
                </p>
                </div>

        </div>
        {% endfor %}
    </section>

    <script src="script.js"></script>
{% endblock %}
*/