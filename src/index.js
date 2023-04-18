import * as dotenv from 'dotenv';

import { withoutOneDataStr, withOneDataStr } from './data.js';
import { solver } from './app/solver.js';

dotenv.config();

const data = { withoutOneDataStr, withOneDataStr };

solver(data);
