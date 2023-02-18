import { config } from 'global-config';

const service = {
    port : parseInt(config.service.authentication.port, 10)|| 8881,
    host : config.service.authentication.host
}

export {
    service,
}