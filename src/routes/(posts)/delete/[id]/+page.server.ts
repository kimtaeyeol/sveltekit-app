import { db } from "$lib/db";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async (event) => {
    await db.post.delete({
      where: {
        id: Number(event.params.id)
      }
    })
    throw redirect(302, '/')
  }
}