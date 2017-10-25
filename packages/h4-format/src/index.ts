import { h4zip } from 'h4-zip';

export function h4format(s: string) {
  return 'whatever:' + s;
}

console.log(h4format('random'));
console.log(h4zip('kurac'));