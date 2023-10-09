import { db } from "$lib/db";
import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async (event) => {
  const post = await db.post.findFirst({
    where: {id: Number(event.params.id)}
  })
  if (!post) {
    throw redirect(302, '/');
  }
  return {post}
}

export const actions: Actions = {
  default: async (event) => {
    const fdata = Object.fromEntries(await event.request.formData())
    if (!fdata.title || !fdata.body) {
      return fail(400, {
        error: 'Missing title or body'
      });
    }
    const title = fdata.title as string
    const body = fdata.body as string
    const post = await db.post.update({
      where: {
        id: Number(event.params.id)
      },
      data: {
        title: title.trim(),
        body: body.trim()
      }
    })
    throw redirect(302, `/read/${post.id}`)
  }
}