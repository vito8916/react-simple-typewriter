# react-simple-typewriter

A lightweight React package to create a typewriter effect effortlessly. Perfect for adding dynamic and engaging text animations to your projects.

## Features
- 🚀 Simple and easy-to-use API
- ⚡ Lightweight and fast
- 🎨 Customizable speed and pause duration
- 🔄 Rotates through multiple strings

## Installation

Install the package using npm:
```bash
npm install react-simple-typewriter
```

Or using yarn:
```bash
yarn add react-simple-typewriter
```

## Usage

Here’s how to use the `TypeWriter` component in your React project:

```tsx
import React from 'react';
import { TypeWriter } from 'react-simple-typewriter';

const App = () => {
  return (
    <TypeWriter
      options={{
        strings: ['Hello, World!', 'Welcome to React Simple Typewriter!'],
        speed: 100, // Typing speed in ms (default: 50)
        pause: 2000, // Pause duration in ms before rotating to the next string (default: 1000)
      }}
    />
  );
};

export default App;
```

## Props

| Prop      | Type   | Default | Description                                    |
|-----------|--------|---------|------------------------------------------------|
| `options` | Object | N/A     | Options to configure the typewriter behavior. |

### Options

| Option   | Type     | Default | Description                                         |
|----------|----------|---------|-----------------------------------------------------|
| `strings`| `string[]` | `[]`    | Array of strings to type.                         |
| `speed`  | `number` | `50`     | Typing speed in milliseconds.                     |
| `pause`  | `number` | `1000`   | Pause duration in milliseconds between strings.    |

## Example

```tsx
import React from 'react';
import { TypeWriter } from 'react-simple-typewriter';

const Example = () => (
  <TypeWriter
    options={{
      strings: ['React is awesome!', 'Try this typewriter effect!'],
      speed: 75,
      pause: 1500,
    }}
  />
);

export default Example;
```

## Development

If you’d like to contribute or modify the package locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/vito8916/react-simple-typewriter.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the package:
   ```bash
   npm run build
   ```

4. Link the package locally for testing:
   ```bash
   npm link
   ```

5. Test the package in a local project:
   ```bash
   npm link react-simple-typewriter
   ```

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Victor Alvarado (https://github.com/vito8916).
