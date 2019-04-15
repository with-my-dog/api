import { reviews } from '../../controllers';

export default async (request, response) => {
  try {
    const { shopId } = request.query;

    if (!shopId || shopId < 1) {
      return response.status(400).send('invalid shopId');
    }

    const { code, data } = await reviews.list({ shopId });

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
