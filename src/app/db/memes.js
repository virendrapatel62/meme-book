import { getDB } from ".";

import { nanoid } from "nanoid";

export async function createMeme(data) {
  if (!data.title) {
    throw new Error("Title must be provided");
  }
  if (!data.url) {
    throw new Error("Url must be provided");
  }
  if (!data.tags) {
    throw new Error("Tags must be provided");
  }

  const db = await getDB();
  db.data.memes.push({ ...data, id: nanoid() });
  await db.write();
}

export async function getAllMemes(filter = {}) {
  const tagFilter = filter.tag;
  const db = await getDB();

  let memes = await db.data.memes;

  if (tagFilter?.trim()) {
    memes = memes.filter((meme) => {
      const index = meme.tags.findIndex((tag) => tag == tagFilter);
      return index > -1;
    });
  }
  return memes;
}

export async function getAllTags() {
  const db = await getDB();
  const tags = db.data.memes.map((meme) => {
    return meme.tags;
  });

  const memeSet = new Set();
  tags.forEach((tags) => tags.forEach((tag) => memeSet.add(tag)));

  return Array.from(memeSet);
}
