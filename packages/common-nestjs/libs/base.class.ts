
import { ConsoleLogger } from '@nestjs/common';

export abstract class BaseClass {
    protected logger: ConsoleLogger;
    constructor(logger: ConsoleLogger) {
        this.logger = logger;
        this.logger.setContext(this.getContext());
    }

    abstract getContext(): string;
}