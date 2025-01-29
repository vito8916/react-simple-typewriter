# react-simple-typewriter-vb

A lightweight React package to create a typewriter effect effortlessly. Perfect for adding dynamic and engaging text animations to your projects.

## Features
- 🚀 Simple and easy-to-use API
- ⚡ Lightweight and fast
- 🎨 Customizable typing and deleting speeds
- 🔄 Rotates through multiple strings
- ⚙️ Configurable loop behavior
- 🎭 Smooth delete animation effect
- ✨ Next.js compatible
- 🖥️ Server-side rendering support
- 🎯 Zero dependencies
- 📱 Responsive and accessible
- 🎨 Customizable styling

## Installation

Install the package using npm:
```bash
npm install react-simple-typewriter-vb
```

Or using yarn:
```bash
yarn add react-simple-typewriter-vb
```

## Usage

Here's how to use the `TypeWriter` component in your React project:

```tsx
import React from 'react';
import { TypeWriter } from 'react-simple-typewriter-vb';

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

| Option       | Type      | Default | Description                                         |
|--------------|-----------|---------|-----------------------------------------------------|
| `strings`    | `string[]`| `[]`    | Array of strings to type.                          |
| `speed`      | `number`  | `50`    | Typing speed in milliseconds.                      |
| `deleteSpeed`| `number`  | `30`    | Deleting speed in milliseconds.                    |
| `pause`      | `number`  | `1000`  | Pause duration in milliseconds between strings.     |
| `loop`       | `boolean` | `true`  | Whether to loop through the strings continuously.   |

## Example

```tsx
import React from 'react';
import { TypeWriter } from 'react-simple-typewriter-vb';

const Example = () => (
  <TypeWriter
    options={{
      strings: ['React is awesome!', 'Try this typewriter effect!'],
      speed: 75,
      pause: 1500,
      loop: false,
      deleteSpeed: 90,
    }}
  />
);

export default Example;
```

## Advanced Usage

### With Custom Styling

You can customize the appearance of the TypeWriter component by wrapping it with your own styled component:

```tsx
import React from 'react';
import { TypeWriter } from 'react-simple-typewriter-vb';

const StyledExample = () => (
  <div style={{ 
    fontFamily: 'monospace',
    fontSize: '2em',
    color: '#333',
    padding: '20px'
  }}>
    <TypeWriter
      options={{
        strings: ['Custom styled typewriter!', 'Make it your own!'],
        speed: 75,
        pause: 1500,
      }}
    />
  </div>
);
```

### With Next.js

The component is fully compatible with Next.js, including server-side rendering:

```tsx
// pages/index.tsx
import { TypeWriter } from 'react-simple-typewriter-vb';

export default function Home() {
  return (
    <main>
      <h1>
        <TypeWriter
          options={{
            strings: ['Welcome to Next.js!', 'Built with TypeWriter'],
            speed: 50,
            loop: true,
          }}
        />
      </h1>
    </main>
  );
}
```

### TypeScript Support

The package includes TypeScript definitions out of the box:

```tsx
import { TypeWriter, TypewriterProps } from 'react-simple-typewriter-vb';

const options: TypewriterProps['options'] = {
  strings: ['TypeScript Support!', 'Full type safety!'],
  speed: 50,
  pause: 1000,
  loop: true,
};

const TypeScriptExample = () => (
  <TypeWriter options={options} />
);
```

## Changelog

### 1.0.5
- Added deleteSpeed option
- Improved server-side rendering
- Added TypeScript support
- 🔄 Improved loop behavior with proper word completion
- ⚡ Optimized animation performance using useRef
- 🛠️ Fixed last word deletion when loop is false
- 🔧 Better Next.js integration with proper 'use client' directive handling
- 🎯 Improved TypeScript definitions

### 1.0.3
- Initial public release
- Basic typewriter functionality
- Customizable speeds and pauses

## Development

If you'd like to contribute or modify the package locally:

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
   npm link react-simple-typewriter-vb
   ```

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Victor Alvarado (https://github.com/vito8916).
