export enum QUEUE_NAME {
    EventSource = 'event-source-queue',
    LogWriter = 'log-writer-queue',
    LogRead = 'log-read-queue',
    LogNotification = 'log-notification-queue',
    
    userRegister = 'user-register-queue',
    userLogin = 'user-login-queue',
    userLogout = 'user-logout-queue',
}

export enum ROUTING_KEY {
    LogRead = 'read.log',
}