import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.params;

    if (id < 1) {
      return response.status(500).send('invalid id');
    }

    const { code, data } = await shops.put({ ...request.params, ...request.body });

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
