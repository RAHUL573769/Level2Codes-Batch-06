declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_LOCAL: string;
    }
  }
}

export default {
  PORT: process.env.PORT,
  DB_LOCAL: process.env.DB_LOCAL,
};
