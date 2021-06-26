const express = require('express');
const { Page } = require('../models');
const router = require('express').Router();
const addPage = require('../views/addPage');
const wikiPage = require('../views/wikipage');

router.use(express.urlencoded({extended: false}));

router.get('/', (req, res) => {
  try {
    res.send('you hit the main app GET');
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    });
    res.redirect(`./${page.slug}`);
  } catch (e) {
    console.log(e);
  }
});

router.get('/add', (req, res) => {
  try {
    res.send(addPage());
  } catch (e) {
    console.log(e);
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const page = await Page.findOne({
      where: {slug: req.params.slug}
    });
    // const author = await page.getUser();
    // console.log(author);
    res.send(wikiPage(page, page.author));
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
