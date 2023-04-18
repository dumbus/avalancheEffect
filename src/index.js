import * as dotenv from 'dotenv';

import { withoutOneData, withOneData } from './data.js';
import { solver } from './app/solver.js';

dotenv.config();

solver(withoutOneData, withOneData);
