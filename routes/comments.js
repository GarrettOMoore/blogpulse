// const express = require('express');
// const db = require('../models');
// const router = express.Router();

// // GET 
// router.get('/:id', function(req, res){
//     db.post.findOne({
//         where: {id: parseInt(req.params.id)},
//         include: [db.comment, db.author]
//     }).then(function(post) {
//         if(!post) throw Error();
//         res.render('posts/show', {post});
//     }).catch(function(error){
//     res.status(500).render('main/500');
//     });
// });



// router.post('/:id', function(req, res){
//     db.comment.create({
//             name: req.body.name,
//             content: req.body.content,
//             postId: req.params.id
//         }).then(function(comment) {
//         res.redirect('/posts/' + req.params.id)
//         })
//     });

// module.exports = router;