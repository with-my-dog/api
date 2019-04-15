import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

import { sequelize } from './models';

import seeds from './seeders';

const { server, database } = require('./config').default;

const app = express();

const swagger = {};

swagger.ui = require('swagger-ui-express');
swagger.apiDocument = require('./swagger.json');

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (server.production) {
  delete swagger.ui;
  delete swagger.apiDocument;
}

if (!server.production) {
  app.use('/docs', swagger.ui.serve, swagger.ui.setup(swagger.apiDocument));
}

app.use('/', routes);
app.use('/*', (_, response) => response.status(404).end());

sequelize.sync({ force: database.sync }).then(() => seeds()).catch(() => process.exit(1));

app.listen(server.port);
