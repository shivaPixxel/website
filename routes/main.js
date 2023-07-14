const express = require('express')
const route = express.Router();
const navbarModel = require('../model/navbarModel') 
const servicesModel = require('../model/servicesModel')
const articleModel = require('../model/articleModel')

route.get('/', async (req,res)=>{
    // const result = await navbarModel.create({label:"gallery", link:"/gallery"})
    // const result = await servicesModel.create({heading:"web design", content:"about web design", readMore:"#"})
    
    const navLinks = await navbarModel.find()
    const services = await servicesModel.find()
    // console.log(navLinks)
    res.render('index',{
        navLinks:navLinks,
        services:services
    })
})

route.get('/about', async (req,res)=>{
    const navLinks = await navbarModel.find()
    res.render("about",{
        navLinks:navLinks
    })
})

route.get('/blog', async (req,res)=>{
    const navLinks = await navbarModel.find()
    const articles = await articleModel.find()
    res.render('blog',{
        navLinks:navLinks,
        articles:articles
    })
})

route.get('/post', async (req,res)=>{
    const navLinks = await navbarModel.find()
    res.render('post',{
        navLinks:navLinks
    })
})

route.post('/post-article', async (req,res)=>{
    const result = articleModel.create(req.body)
    console.log(result)
    res.redirect('/blog')
})

module.exports = route