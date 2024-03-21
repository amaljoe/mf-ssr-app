import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'amal',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
