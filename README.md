# `@greenberry/use-label-prefix`

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

