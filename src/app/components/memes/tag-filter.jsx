import { getAllTags } from "@/app/db/memes";
import React from "react";
import Link from "next/link";

import styles from "./tag-filter.module.css";

export default async function TagFilter() {
  const allTags = await getAllTags();

  return (
    <div>
      <div className={styles.tags}>
        <div className={styles.tag}>
          <Link href={`/memes`}>All</Link>
        </div>

        {allTags.map((tag) => (
          <div className={styles.tag} key={tag}>
            <Link href={`/memes?tag=${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
