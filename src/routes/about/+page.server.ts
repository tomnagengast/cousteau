import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ locals }) => {
//   const session = await locals.auth.validate();
//   if (session) throw redirect(302, '/about');
//   return {};
// };

export const actions: Actions = {
  createPlan: async ({ request, locals }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    // basic check
    if (typeof name !== 'string' || name.length < 1 || name.length > 31) {
      return fail(400, {
        message: 'Invalid name'
      });
    }
    try {
      console.log(name, description);
      //   const user = await auth.useKey('username', username.toLowerCase(), password);
      //   const session = await auth.createSession({
      //     userId: user.userId,
      //     attributes: {}
      //   });
      //   locals.auth.setSession(session); // set session cookie
    } catch (e) {
      if (e) {
        console.log(e);
      }

      return fail(500, {
        message: 'An unknown error occurred'
      });
    }
  }
};
