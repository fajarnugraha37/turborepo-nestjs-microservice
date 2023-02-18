import { config } from 'global-config';

const service = {
    port : parseInt(config.service.gateway.port, 10)|| 8882,
    host : config.service.gateway.host
}

export {
    service,
}