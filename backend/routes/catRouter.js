// blog_app/routes/ArticleRouter.js
import express from "express";
import Cat from "../models/cat.js";
const router = express.Router();
 
router.post("/cat", async (request, response) => {
  const article = new Cat(request.body);


 
  try {
    await article.save();
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Add the following
router.get("/cat", async (request, response) => {

    const fluffy = new Cat({ name: 'fluffy' });
    await fluffy.save();

    try {
        const articles = await Cat.find({});
      response.send(articles);
    } catch (error) {
      response.status(500).send({ error });
    }
  });
 
export default router;