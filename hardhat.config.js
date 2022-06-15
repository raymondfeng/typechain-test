// Copyright Abridged, Inc. 2021. All Rights Reserved.
// Node module: @collabland/contracts
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

require('@nomiclabs/hardhat-ethers');
require('@typechain/hardhat');
const path = require('path');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config = {
  solidity: {
    version: '0.8.3',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    root: path.join(__dirname, '.'),
    sources: path.join(__dirname, './src/contracts'),
    tests: path.join(__dirname, './dist/__tests__'),
    cache: path.join(__dirname, './dist/cache'),
    artifacts: path.join(__dirname, './dist/artifacts'),
  },
  defaultNetwork: 'hardhat',

  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    externalArtifacts: [path.join(__dirname, 'src/contracts/**/*.json')],
  },
};

module.exports = config;
