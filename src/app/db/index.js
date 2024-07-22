import { JSONFilePreset } from "lowdb/node";
const getDB = () => {
  return JSONFilePreset("db.json", { memes: [] });
};

export { getDB };
