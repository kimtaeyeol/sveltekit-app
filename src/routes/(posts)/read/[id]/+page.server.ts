import { db } from "$lib/db";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const post = await db.post.findFirst({
    where: {
      id: Number(event.params.id)
    }
  })
  if (!post) {
    throw redirect(302, '/');
  }
  return {post}
}