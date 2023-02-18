export abstract class JsonSuccessDto<T> {
    public statusCode: number;
    public timestamp: string;
    public message?: string;
    public data?: T;
}