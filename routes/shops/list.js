import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const {
      swlongitude, swlatitude, nelongitude, nelatitude,
    } = request.query;

    if (!swlongitude || !swlatitude
      || typeof swlongitude * 1 !== 'number' || typeof swlatitude * 1 !== 'number') {
      return response.status(400).send('invalid sw');
    }

    if (!nelongitude || !nelatitude
      || typeof nelongitude * 1 !== 'number' || typeof nelatitude * 1 !== 'number') {
      return response.status(400).send('invalid ne');
    }

    const hight = Math.abs(nelongitude - swlongitude);

    const width = Math.abs(nelatitude - swlatitude);

    if (hight > 0.01) {
      return response.status(400).send('longitude is too much');
    }

    if (width > 0.01) {
      return response.status(400).send('latitude is too much');
    }

    const { code, data } = await shops.list(request.query);

    return response.status(code).end(data);
  } catch (error) {
    return response.stauts(500).send('internal server error');
  }
};
