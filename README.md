# Array Limited

Simple limited arrays in length.

This package is a mini array cache. You specify the max number of items you want and it will push out of the list the elements at the beginning of the array.

## Installation

Yarn 

```
yarn add array-limited
```

Npm

```
npm i array-limited
```

## Usage

To have max 3 items and push to the list

```typescript
import { ArrayLimited } from 'array-limited';
const lmtArray = new ArrayLimited(3)
lmtArray.push(1)
lmtArray.push(2)
lmtArray.push(3)
console.log(lmtArray.values)
// ouput: [1, 2, 3]
lmtArray.push(4)
console.log(lmtArray.values)
// ouput: [2, 3, 4]
```

You can also add items to the front to kick items at the out.

```typescript
import { ArrayLimited } from 'array-limited';
const lmtArray = new ArrayLimited(3)
lmtArray.push(1)
lmtArray.push(2)
lmtArray.push(3)
console.log(lmtArray.values)
// ouput: [1, 2, 3]
lmtArray.pushFront(4)
console.log(lmtArray.values)
// ouput: [4, 1, 2]
```

Finally you can check if the array is already filled.

```typescript
import { ArrayLimited } from 'array-limited';
const lmtArray = new ArrayLimited(3)
console.log(lmtArray.isFilled())
// ouput: false
lmtArray.push(1)
lmtArray.push(2)
lmtArray.push(3)
console.log(lmtArray.isFilled())
// ouput: true
```

## Author

**Author**: [Burlet Mederic](https://github.com/crimson-med)

**Licence**: [GPL-3-0-only](https://github.com/crimson-med/array-limited