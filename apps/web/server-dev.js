const { config } = require('global-config/index');
const cli = require('next/dist/cli/next-dev');

cli.nextDev(['-p', config.service.web.port || 3000]);