## Sentences typing

Sentences typing is a small react component that types sentence after sentence.

## **[Demo](https://mcodeapp.github.io/sentences-typing)**

## Install
```shell
npm install sentences-typing-lib --save

or

yarn add sentences-typing-lib
```

## Basic Usage
```jsx
import React, {Component} from 'react';
import { Typing } from 'sentences-typing';

const sentences = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt'
];

export default class MyComponent extends Component {
  render() {
    return (
      <Typing sentences={sentences}/>
    );
  }
}
```


## Infinity mode
```jsx
import React, {Component} from 'react';
import { Typing } from 'sentences-typing';

const sentences = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipiscing elit',
    'sed do eiusmod tempor incididunt'
];

export default class MyComponent extends Component {
  render() {
    return (
      <Typing sentences={sentences} infinity/>
    );
  }
}
```

## Props

#### sentences
Array of strings for typing.

#### infinity
*Default*: `false`

When infinity mode is active component typing sentences in infinity loop (starting from the second sentence)





