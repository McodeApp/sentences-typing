## Sentence typing

Sentences typing is a small react component that types

## **[Demo](https://mcodeapp.github.io/sentences-typing)**

## Install
```shell
npm install sentences-typing --save

or

yarn add sentences-typing
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

## Props

#### sentences
Array of strings for typing.

#### infinity
*Default*: `false`





