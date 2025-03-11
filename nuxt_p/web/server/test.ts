import { defineEventHandler, type H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  console.log(event);
  const test: any = 456;
  const array = Array(0, 1, 2);
  const arr: number[] = [1, 2];

  delete arr[0];
  console.log(test, array);

  function f() {
    return Math.random() < 0.5 ? 42 : 'oops';
  }

  async function returnNumber() {
    return 1;
  }

  returnNumber();

  const z = f() as number;

  const items = [1, '2', 3, '4'];

  const number = items[0] as number;

  Promise.reject('error');
  Promise.reject(new Error());
  const foo = <number>(3 + 5);
});

function foo1() {
  return 1 as any;
}

foo1();

interface ButtonProps {
  onClick: () => void;
}

class Button implements ButtonProps {
  onClick = () => console.log('button!');
}

type UnionAny = unknown | 'foo';

const a: UnionAny = 123;
