import { config } from 'global-config';

const service = {
    port : parseInt(config.service.logger.port, 10)|| 8883,
    host : config.service.logger.host
}

export {
    service,
}