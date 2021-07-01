import { ArrayLimited } from '../ArrayLimited';

const lmtArray = new ArrayLimited(3)

test('ArrayLimited Empty', () => {
    expect(lmtArray.values).toStrictEqual([]);
});

test('ArrayLimited notFilled', () => {
    expect(lmtArray.isFilled()).toStrictEqual(false);
});

test('ArrayLimited 3 Values', () => {
    lmtArray.push(1)
    lmtArray.push(2)
    lmtArray.push(3)
    expect(lmtArray.values).toStrictEqual([1, 2, 3]);
});

test('ArrayLimited isFilled', () => {
    expect(lmtArray.isFilled()).toStrictEqual(true);
});

test('ArrayLimited First Value Kicked', () => {
    lmtArray.push(4)
    expect(lmtArray.values).toStrictEqual([2, 3, 4]);
});

test('ArrayLimited Last Value Kicked', () => {
    lmtArray.pushFront(5)
    expect(lmtArray.values).toStrictEqual([5, 2, 3]);
});