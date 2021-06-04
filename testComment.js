const db = require('./models')

async function newcomment() {
    db.comment.create({
    name: 'Paul Allen',
    content: 'This is really neat!!!!!!!! Thanks for posting.',
    articleId: 1
    })
    .then(comment => {
    console.log(comment.get())
    })
}
newcomment()

db.article.findOne({
    where: { id: 1 },
    include: [db.comment]
  }).then(article => {
    // by using eager loading, the article model should have a comments key
    console.log(article.comments)
  })








  