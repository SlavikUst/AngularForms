import 'reflect-metadata';

export function auth(value: string): any {
  return function(target, key) {
    Reflect.set(target, key, value);
  }
};
