_Meta-package for using Parcel with Typescript_

### Provides

- `parcel`, `@babel/core`, and `postcss`
- `@adaliszk/parcel-config-typescript`
- `@adaliszk/babel-typescript-preset`

### Usage

- Install: `yarn add -D @adaliszk/parcel-typescript`
- Add a `.parcelrc` with the content of:
  ```json5
  {"extends": ["@adaliszk/typescript"]}
  ```
