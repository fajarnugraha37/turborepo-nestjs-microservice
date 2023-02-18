
import { StreamLogger } from './stream.logger';

export abstract class BaseClassForStreamLogger {
    protected logger: StreamLogger;
    constructor(logger: StreamLogger) {
        this.logger = logger;
        this.logger.setContext(this.getContext());
    }

    abstract getContext(): string;
}