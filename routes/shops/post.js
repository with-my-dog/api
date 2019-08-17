import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      name, address, latitude, longitude, phone, open, close, shopCategoryId,
      petTypeId,
    } = request.body;

    if (!name) {
      return response.status(400).send('invalid name');
    }

    if (!address) {
      return response.status(400).send('invalid address');
    }

    if ((!latitude && !longitude) || (latitude && !longitude) || (!latitude && longitude)) {
      return response.status(400).send('invlid location');
    }

    if (!phone) {
      return response.status(400).send('invalid phone');
    }

    if (!open) {
      return response.status(400).send('invalid open time');
    }

    if (!close) {
      return response.status(400).send('invalid close time');
    }

    if (!shopCategoryId) {
      return response.status(400).send('invalid category');
    }

    if (!petTypeId) {
      return response.status(400).send('invalid pet type');
    }

    const { code, data } = await shops.post(request.body);

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
