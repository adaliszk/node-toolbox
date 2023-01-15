_My frequently used NPM packages wrapped up into easy-to-use packs_

# AdaLiszk's Node Toolbox

Working with the Node ecosystem building many projects and packages can become pretty heavy to maintain as each
individual project depends on the same set of dependencies but on different versions. While many automation tools does
try to combat this, it is very common to abstract away frequently used package groups into a centralised configuration
and preset library.

This repository contains my frequently used abstractions and configurations alongside of a few tools and framework
extensions that aims to aid work to be done more efficiently.

### Prerequisites

- [`nodejs >= 18.x`](https://nodejs.org/en/download) as the environment for development
- [`yarn >= 3.1`](https://yarnpkg.com/getting-started/install) as the package manager
- [`changeset >= 2.16`](https://github.com/changesets/changesets) as versioning and publishing tool
- [`turbo >= 1.6`](https://turbo.build/repo/docs) as the monorepo orchestrator

### Folder structure

- **/configs**: Static/Semi-Static configuration files in json, yaml, or commonjs
- **/helpers**: Interfaces, Decorators, and Mixins for Typescript projects
- **/packages**: Bundle/Facade packages to work with frameworks and tools

## Packages

| Name                                                                               | Type    | NPM                                                                                                                                                                               | Issues                                                                                                                                                                                                                                                                           |
|:-----------------------------------------------------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`@adaliszk/eslint`](packages/eslint/README.md)                                    | Bundle  | [![NPM](https://img.shields.io/npm/v/@adaliszk/eslint.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/eslint)                                     | [![Issues for ESLint](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aeslint)](https://github.com/adaliszk/node-toolbox/labels/eslint)                                                           |
| [`@adaliszk/eslint-config-react`](configs/eslint-config-typescript/README.md)      | Config  | [![NPM](https://img.shields.io/npm/v/@adaliszk/eslint-config-react.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/eslint-config-react)           | [![Issues for React ESLint Config](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aeslint-config-react)](https://github.com/adaliszk/node-toolbox/labels/eslint-config-react)                    |
| [`@adaliszk/eslint-config-typescript`](configs/eslint-config-typescript/README.md) | Config  | [![NPM](https://img.shields.io/npm/v/@adaliszk/eslint-config-typescript.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/eslint-config-typescript) | [![Issues for Typescript ESLint Config](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aeslint-config-typescript)](https://github.com/adaliszk/node-toolbox/labels/eslint-config-typescript)     |
| [`@adaliszk/fission`](helpers/fission/README.md)                                   | Typedef | [![NPM](https://img.shields.io/npm/v/@adaliszk/fission.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/fission)                                   | [![Issues for Fission Types](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Afission)](https://github.com/adaliszk/node-toolbox/labels/fission)                                                  |
| `@adaliszk/nestjs`                                                                 | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| `@adaliszk/nestjs-service`                                                         | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| `@adaliszk/nestjs-processor`                                                       | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| `@adaliszk/nestjs-fission`                                                         | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| `@adaliszk/nestjs-testing`                                                         | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| [`@adaliszk/react`](packages/react/README.md)                                      | Bundle  | [![NPM](https://img.shields.io/npm/v/@adaliszk/react.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/react)                                       | [![Issues for React Bundle](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Areact)](https://github.com/adaliszk/node-toolbox/labels/react)                                                       |
| [`@adaliszk/react-compiler`](configs/react-compiler/README.md)                     | Config  | [![NPM](https://img.shields.io/npm/v/@adaliszk/react-compiler.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/react-compiler)                     | [![Issues for React Compiler](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Areact-compiler)](https://github.com/adaliszk/node-toolbox/labels/react-compiler)                                   |
| `@adaliszk/react-testing`                                                          | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |
| [`@adaliszk/typescript`](configs/typescript/README.md)                             | Config  | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/typescript)                             | [![Issues for Typescript](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript)](https://github.com/adaliszk/node-toolbox/labels/typescript)                         |
| [`@adaliszk/typescript-testing`](packages/typescript-testing/README.md)            | Bundle  | [![NPM](https://img.shields.io/npm/v/@adaliszk/typescript-testing.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/typescript-testing)             | [![Issues for Typescript Testing](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&label%3A%20typescript&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Atypescript-testing)](https://github.com/adaliszk/node-toolbox/labels/typescript-testing) |
| `@adaliszk/web-compiler`                                                           | Config  | [![NPM](https://img.shields.io/npm/v/@adaliszk/web-compiler.svg?logo=npm&label=&style=flat-square)](https://www.npmjs.com/package/@adaliszk/web-compiler)                         | [![Issues for Web Compiler](https://img.shields.io/github/issues-search?logo=github&label=&style=flat-square&query=repo%3Aadaliszk%2Fnode-toolbox%20label%3Aweb-compiler)](https://github.com/adaliszk/node-toolbox/labels/web-compiler)                                         |
| `@adaliszk/web-testing`                                                            | -       | -                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                |

## Contributions

While this is my personal toolbox, you are free to use it and contribute to it!
Bugreports are especially welcomed!
