export abstract class JsonErrorDto<T> {
    public statusCode: number;
    public timestamp: string;
    public path: string;
    public message?: string;
    public data?: T;
}