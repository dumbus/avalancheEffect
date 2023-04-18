import * as dotenv from 'dotenv';

import { getAppMode } from './app/parsers/parseAppMode.js';
import { getData } from './app/parsers/parseDataFromUser.js';
import { solver } from './app/solver.js';

dotenv.config();

const appMode = getAppMode();

const data = getData(appMode);

solver(data);
