import React from "react";
import { getAllMemes, getAllTags } from "../db/memes";
import styles from "./meme.module.css";
import Link from "next/link";
import TagFilter from "../components/memes/tag-filter";

export default async function MemeListingPage({ searchParams }) {
  const tagFilter = searchParams.tag;

  const memes = await getAllMemes({
    tag: tagFilter,
  });

  return (
    <div className={styles.container}>
      <h1>All Memes</h1>

      <TagFilter />

      <div className={styles.memes}>
        {memes.map((meme) => (
          <div className={styles.meme} key={meme.id}>
            <img src={meme.url} alt="" />

            <div className={styles.title}>{meme.title}</div>
            <div className={styles.tags}>
              {meme.tags.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
