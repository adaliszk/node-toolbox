_My frequently used NPM packages wrapped up into easy-to-use packs_

AdaLiszk's Node Toolbox
=======================
Working with the Node ecosystem and building many projects and packages can become pretty heavy to maintain as each
individual project depends on the same set of dependencies but on different versions. While many automation tools does
try to combat this, it is very common to abstract away frequently used package groups into meta-packages.

This project contains my frequently used abstractions and configurations alongside of a few tools and framework
extensions that aims to aid work to be done more efficiently.

### Prerequisites

- [`nodejs>=16`](https://nodejs.org/en/download) as the environment for development
- [`yarn>=3`](https://yarnpkg.com/getting-started/install) as the package manager
- [`lerna>=4`](https://www.npmjs.com/package/lerna) as the distribution tool

### Project structure

- **/packages**: Meta-Packages with some extra configuration files
- **/specifications**: Interfaces, Decorators, and Mixins for Typescript projects
- **/stacks**: Meta-Packages delivering framework stacks

Packages
--------

| Name                                                                                | Type   | NPM                                                                                                                                                             | Issues                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------------------------------------------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@adaliszk/cli`                                                                     | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/cli-logging`                                                             | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/cli-rollup`                                                              | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/cli-testing`                                                             | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| [`@adaliszk/babel-typescript-preset`](packages/babel-typescript-preset/README.md)   | Config | [![NPM](https://img.shields.io/npm/v/@adaliszk/babel-typescript-preset.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/babel-typescript-preset)   | [![Issues for Typescript Babel Preset](https://img.shields.io/github/issues-search?logo=github&label=&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Ababel-typescript-preset)](https://github.com/adaliszk/node-toolbox/labels/babel-typescript-preset)                                 |
| [`@adaliszk/eslint-config-typescript`](packages/eslint-config-typescript/README.md) | Config | [![NPM](https://img.shields.io/npm/v/@adaliszk/eslint-config-typescript.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/eslint-config-typescript) | [![Issues for Typescript ESLint Config](https://img.shields.io/github/issues-search?logo=github&label=&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aeslint-config-typescript)](https://github.com/adaliszk/node-toolbox/labels/eslint-config-typescript)                              |
| `@adaliszk/json-api-spec`                                                           | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/json-rpc-spec`                                                           | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| [`@adaliszk/parcel-config-typescirpt`](packages/parcel-config-typescript/README.md) | Config | [![NPM](https://img.shields.io/npm/v/@adaliszk/parcel-config-typescirpt.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/parcel-config-typescirpt) | [![Issues for Typescript Parcel Configuration](https://img.shields.io/github/issues-search?logo=github&label=&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aparcel-config-typescirpt)](https://github.com/adaliszk/node-toolbox/labels/parcel-config-typescirpt) |
| [`@adaliszk/parcel-typescript`](packages/parcel-typescript/README.md)               | Meta   | [![NPM](https://img.shields.io/npm/v/@adaliszk/parcel-typescript.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/parcel-typescript)               | [![Issues for Typescript Parcel](https://img.shields.io/github/issues-search?logo=github&label=&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aparcel-typescript)](https://github.com/adaliszk/node-toolbox/labels/parcel-typescript)                             |
| [`@adaliszk/typescript`](packages/typescript/README.md)                             | Config | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/typescript)                             | [![Issues for Typescript](https://img.shields.io/github/issues-search?logo=github&label=&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript)](https://github.com/adaliszk/node-toolbox/labels/typescript)                                                  |
| `@adaliszk/typescript-rollup`                                                       | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| [`@adaliszk/typescript-testing`](packages/typescript-testing/README.md)             | Facade | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript-testing.svg?logo=npm&label=)](https://www.npmjs.com/package/@adaliszk/typescript-testing)             | [![Issues for Typescript Testing](https://img.shields.io/github/issues-search?logo=github&label=&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript-testing)](https://github.com/adaliszk/node-toolbox/labels/typescript-testing)                          |
| `@adaliszk/webcomponent`                                                            | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/webcomponent-docgen`                                                     | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/webcomponent-rollup`                                                     | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
| `@adaliszk/webcomponent-testing`                                                    | -      | -                                                                                                                                                               | -                                                                                                                                                                                                                                                                                       |
