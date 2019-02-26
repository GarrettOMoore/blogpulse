const express = require('express');
const db = require('../models');
const router = express.Router();

// GET /posts/:id - reads one post
router.get('/:id', function(req, res){
    db.post.findOne({
        where: {id: parseInt(req.params.id)},
        include: [db.author, db.comment]
    }).then(function(post) {
        if(!post) throw Error();
        res.render('posts/show', {post});
    }).catch(function(error){
    res.status(500).render('main/500');
    });
});



router.post('/', function(req, res){
    db.post.findById(parseInt(req.body.postId))
        .then(function(post) {
        post.createComment({
            name: req.body.name,
            content: req.body.content
        }).then(function(comment) {
            res.redirect('/posts/' + post.id)
        });
    });
});

module.exports = router;