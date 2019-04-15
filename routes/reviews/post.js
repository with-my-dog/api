import { reviews } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      shopId, petTypeId, shopCategoryId, petAttitudeId, shopAvailableId, reservationId,
    } = request.body;

    if (!shopId || !petTypeId || !shopCategoryId
      || !petAttitudeId || !shopAvailableId || !reservationId) {
      return response.status(400).send('some data is missing');
    }

    const { code, data } = await reviews.post(request.body);

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
