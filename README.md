# Limited Array

Simple limited array in length.

This package is a mini array cache. You specify the max number of items you want and it will push out of the list the elements at the beginning of the array.

## Installation

```
To fill
```

## Usage

To have max 3 items and push to the list

```typescript
import { LimitedArray } from '../LimitedArray';
const lmtArray = new LimitedArray(3)
lmtArray.push(1)
lmtArray.push(2)
lmtArray.push(3)
console.log(lmtArray)
// ouput: [1, 2, 3]
lmtArray.push(4)
console.log(lmtArray)
// ouput: [2, 3, 4]
```

You can also add items to the front to kick items at the out.

```typescript
import { LimitedArray } from '../LimitedArray';
const lmtArray = new LimitedArray(3)
lmtArray.push(1)
lmtArray.push(2)
lmtArray.push(3)
console.log(lmtArray)
// ouput: [1, 2, 3]
lmtArray.pushFront(4)
console.log(lmtArray)
// ouput: [4, 1, 2]
```

Finally you can check if the array is already filled.

```typescript
import { LimitedArray } from '../LimitedArray';
const lmtArray = new LimitedArray(3)
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

**Licence**: [GPL-3-0-only](https://github.com/crimson-med/limited-array