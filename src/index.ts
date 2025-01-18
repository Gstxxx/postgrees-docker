import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { prisma } from "./prisma.js";

const app = new Hono();

app.post("/tweets", async (c) => {
  const { content, authorId } = await c.req.json();
  const tweet = await prisma.tweet.create({
    data: {
      content,
      authorId,
    },
  });
  return c.json(tweet, 201);
});

app.get("/tweets", async (c) => {
  const tweets = await prisma.tweet.findMany();
  return c.json(tweets);
});

app.get("/tweets/:id", async (c) => {
  const { id } = c.req.param();
  const tweet = await prisma.tweet.findUnique({
    where: { id },
  });
  if (!tweet) {
    return c.notFound();
  }
  return c.json(tweet);
});

app.delete("/tweets/:id", async (c) => {
  const { id } = c.req.param();
  const tweet = await prisma.tweet.delete({
    where: { id },
  });
  return c.json(tweet);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
