import { auth } from '../../controllers';

export default async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email) {
      return response.status(400).send('invalid email');
    }

    if (!password) {
      return response.status(400).send('invalid password');
    }

    const result = await auth.post({ email, password });

    if (typeof result === 'number') {
      return response.status(result);
    }

    return response.status(201).send(result);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
