import { LimitedArray } from '../LimitedArray';

const lmtArray = new LimitedArray(3)

test('LimitedArray Empty', () => {
    expect(lmtArray.values).toStrictEqual([]);
});

test('LimitedArray notFilled', () => {
    expect(lmtArray.isFilled()).toStrictEqual(false);
});

test('LimitedArray 3 Values', () => {
    lmtArray.push(1)
    lmtArray.push(2)
    lmtArray.push(3)
    expect(lmtArray.values).toStrictEqual([1, 2, 3]);
});

test('LimitedArray isFilled', () => {
    expect(lmtArray.isFilled()).toStrictEqual(true);
});

test('LimitedArray First Value Kicked', () => {
    lmtArray.push(4)
    expect(lmtArray.values).toStrictEqual([2, 3, 4]);
});

test('LimitedArray Last Value Kicked', () => {
    lmtArray.pushFront(5)
    expect(lmtArray.values).toStrictEqual([5, 2, 3]);
});