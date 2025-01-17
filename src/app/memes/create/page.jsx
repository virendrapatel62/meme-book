import FormSubmitButton from "@/app/components/input/form-submit-button";
import TextInput from "@/app/components/input/text-input";
import { db, getDB } from "@/app/db";
import { redirect } from "next/navigation";
import React from "react";

import { nanoid } from "nanoid";
import { createMeme } from "@/app/db/memes";

export default async function MemeCreatePage() {
  async function handleSubmit(formData) {
    "use server";
    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    const { title, url } = data;

    const tags = data.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    await createMeme({
      tags,
      title,
      url,
    });

    return redirect("/memes");
  }

  return (
    <div>
      <h1>Create A new Meme now! </h1>
      <hr />

      <div>
        <form action={handleSubmit}>
          <TextInput
            label={"title"}
            name="title"
            placeholder="Mai to betha hu kismat ke bharose"
          ></TextInput>

          <TextInput
            label={"Tag (Comma Separated)"}
            name="tags"
            placeholder="kismat, punnet"
          ></TextInput>
          <TextInput
            name="url"
            label="Image URL of the new Meme"
            placeholder="example.com/meme.jpg"
          ></TextInput>

          <FormSubmitButton label="Create Meme" />
        </form>
      </div>
    </div>
  );
}
