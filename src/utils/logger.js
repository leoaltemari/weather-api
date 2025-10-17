function ts() {
    return new Date().toISOString();
}

export const logger = {
    info: (message, meta) => console.log(`[INFO] [${ts()}] ${message}`, meta || ''),
    error: (message, meta) => console.error(`[ERROR] [${ts()}] ${message}`, meta || ''),
};
