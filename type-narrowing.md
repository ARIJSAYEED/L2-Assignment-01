# Type Narrowing in TypeScript: Making Sense of `typeof`, `instanceof`, and `in`

## Introduction

Union types are great until you try to use one. If a value could be a `string` or a `number`, TypeScript won't let you call `.toUpperCase()` on it, and fair enough. Type narrowing is how you prove to the compiler which type you're dealing with, and it's simpler than it sounds.

## `typeof` for Primitives

This is the one I use most. Check the type with `typeof`, and TypeScript understands inside that branch.

```ts
function format(value: string | number) {
  if (typeof value === "string") return value.toUpperCase();
  return value.toFixed(2); // must be a number here
}
```

## `instanceof` for Classes

When you're dealing with class instances, like errors in a `catch` block, `instanceof` does the job. It checks whether the value was created from that class.

```ts
function logError(err: Error | string) {
  if (err instanceof Error) console.log(err.message);
  else console.log(err);
}
```

## `in` for Object Shapes

Sometimes your union is made of plain objects, so there's no class to check. In that case, `in` checks whether a property exists.

```ts
type Bird = { fly(): void };
type Fish = { swim(): void };

function move(animal: Bird | Fish) {
  if ("fly" in animal) animal.fly();
  else animal.swim();
}
```

## Conclusion

Narrowing lets you write normal-looking checks and get type safety for free. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes, and you'll rarely need a type assertion.