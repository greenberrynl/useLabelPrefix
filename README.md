# `@greenberry/use-label-prefix`

[![coverage report](https://gitlab.com/greenberrynl/hooks/use-label-prefix/badges/master/coverage.svg)](https://gitlab.com/greenberrynl/hooks/use-label-prefix/commits/master)
[![pipeline status](https://gitlab.com/greenberrynl/hooks/use-label-prefix/badges/master/pipeline.svg)](https://gitlab.com/greenberrynl/hooks/use-label-prefix/commits/master)

## Why?

When generating a lot of input groups on one page it can get tedious to create a unique label/id for each input group.
However this is required when you want to keep semantics and accessibility functionalities.
This hook generates a prefix for your labels which persist over multiple updates and are unique per instance of the component.

## Installation

```bash
yarn add @greenberry/use-label-prefix
# or
npm i @greenberry/use-label-prefix
```

## Usage

```js
// Minimal example
const prefixed = useLabelPrefix('my-label');

// With larger prefix; defaults to 8
const prefixed2 = useLabelPrefix('my-label', 16);
```

**Inside a component**
```js
const MyInput = () => {
  const prefixedLabel = useLabelPrefix('my-label');

  return (
    <div>
      <label htmlFor={prefixedLabel}>
        Hello Prefix
      </label>
      <input id={prefixedLabel} type="text" />
    </div>
  );
};

```
