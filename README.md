# TypeScript Assignment

## Overview

This repository contains my TypeScript assignment, made up of coding solutions and two short technical blog posts.

The code in `solutions.ts` covers these topics:

- **Default parameters:** `multiplyValue` multiplies two numbers, using `2` as the default second value.
- **Type narrowing:** `processInput` handles a `string | number | boolean` input using `typeof` checks.
- **Readonly tuples:** `formatCoordinate` formats a `readonly [number, number, string]` location.
- **Generics:** `concatenateArrays<T>` merges any number of arrays of the same type.
- **Interfaces:** `getPopularCourses` filters a list of `Course` objects by publish status and student count.
- **Generic constraints with `keyof`:** `pluckValues<T, K extends keyof T>` extracts one property from every item in an array.
- **OOP and access modifiers:** `Employee` and `Manager` classes using `protected`, `private`, and inheritance.
- **Async with `Promise<T>`:** `validateAgeAsync` resolves or rejects based on the given age.

## Blog Posts

1. [`type` vs `interface` in TypeScript](./type-vs-interface.md)
2. [Type Narrowing in TypeScript](./type-narrowing.md)

## Files

| File | Description |
| --- | --- |
| `solutions.ts` | All coding solutions |
| `type-vs-interface.md` | Blog post 1 |
| `type-narrowing.md` | Blog post 2 |
| `README.md` | Assignment overview |
