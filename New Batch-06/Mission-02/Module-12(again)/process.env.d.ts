declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            POSTGRES_DATABASE: string

        }
    }
}

export default {
    PORT: process.env.PORT,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE
};
