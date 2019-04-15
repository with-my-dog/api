import { users } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;

    const result = await users.get(id);

    const { code, data } = result;

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('invernal server error');
  }
};
