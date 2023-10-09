import { db } from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const posts = await db.post.findMany({
   orderBy: [{ id: 'desc' }]
  })
  return {posts}
};