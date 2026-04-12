import path from 'path';

export const AppConfig = {
  ssh: {
    port: 2222,
    keys: {
      private: path.join(process.cwd(), 'keys/host_key'),
      public: path.join(process.cwd(), 'keys/host_key.pub'),
    },
  },
};
