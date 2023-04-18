import { argv } from 'node:process';

const getAppMode = () => {
  const appModeArg = argv[2];

  let appMode = 'template';

  if (appModeArg && appModeArg.startsWith('--mode')) {
    appMode = appModeArg.slice(7);
  }

  return appMode;
};

export { getAppMode };
