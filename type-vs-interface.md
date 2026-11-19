# `type` vs `interface` in TypeScript: Which One Do I Reach For?

## Introduction

When I started with TypeScript, I kept asking myself the same thing every time I defined an object: `type` or `interface`? For simple shapes they behave almost the same, so it's easy to pick randomly. But the differences matter once your code grows, so here's how I think about them.

## What Actually Differs

The first big one is declaration merging. If you declare two interfaces with the same name, TypeScript quietly combines them. A `type` will just throw an error. On the other hand, only `type` can describe unions, tuples, and primitives.

```ts
interface User { name: string }
interface User { age: number }   // merged into one User

type Id = string | number;       // interfaces can't do this
```

Extending works differently too. Interfaces use `extends`, while types use `&` to combine shapes. You end up with the same result, just written another way.

```ts
interface Admin extends User { role: string }
type Staff = User & { role: string };
```

Classes can `implement` both, though interfaces are what most people use there.

## My Rule of Thumb

If I'm describing an object or a class contract, especially something others might extend, I use `interface`. The moment I need a union, a tuple, or a mapped type, I switch to `type` because I have no other choice.

## Conclusion

Neither one is better. Interfaces suit objects, and types handle everything else. Honestly, the most important thing is choosing a convention with your team and sticking to it.