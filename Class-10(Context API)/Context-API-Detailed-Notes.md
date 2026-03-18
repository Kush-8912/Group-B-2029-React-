## Context API — Detailed Notes (Class-10 material, commit-by-commit)

These notes follow the exact flow of what was built in `Class-10(Context API)/vite-project` and the related commits:
- `559218c` — **Context API**
- `d221524` — **using context at main**
- `fe3de4c` — **context applied on Movies App**

---

### Why we needed Context (what was taught in class)
In component trees like:
`App → Parent → Child → Child2`
we often want to share the same data (and functions) with deeply nested children.

Without Context, we would pass props like:
`App -> Parent1 -> Child2`
even if `Parent1` doesn’t need them.

This repeated passing is called **prop drilling**.

**Context API solves this** by letting a parent “provide” values once and letting any child “consume” them directly.

---

## Commit `559218c` — “Context API”

### Step 1: Create an empty Context
File created/updated: `src/components/ParkContext.jsx`

```js
import React from "react";
export const ParkContext = React.createContext();
// Context is Empty
```

Key point taught:
- `createContext()` creates a context “channel”.
- At this stage, it is **empty** unless we wrap components with a Provider.

### Step 2: Build a component tree where we want data in a deep child
Files updated: `Parent1.jsx`, `Parent2.jsx`, `Child2.jsx`, etc.

Structure (from the class project):
- `App.jsx` renders `<Parent1 />` and `<Parent2 />`
- `Parent1.jsx` renders `<Child1 />` and `<Child2 />`

### Step 3: Read data using `useContext()` (consumer)
File: `src/components/Child2.jsx`

```js
import { useContext } from "react";
import { ParkContext } from "./ParkContext";

function Child2() {
  const data = useContext(ParkContext);
  // data.rollerCoaster
  // data.ticketForRollerCoaster()
}
```

Key point taught:
- `useContext(ParkContext)` returns whatever value is provided by the nearest `<ParkContext.Provider />` above it.

Important note (very important for class understanding):
- In this commit, the Context is still “empty” because we haven’t used a Provider yet.
- If `Child2` tries to access `data.rollerCoaster` before a Provider is added, `data` can be `undefined`.

So the next commit teaches how to **provide** the context value.

---

## Commit `d221524` — “using context at main”

### Step 4: Provide the Context value at the top-level (`main.jsx`)
File updated: `src/main.jsx`

In class, we created an object called `parkInfo` containing:
- data fields: `parkName`, `rollerCoaster`, etc.
- functions: `ticketForRollerCoaster()`, etc.

Then we wrapped the app:

```jsx
createRoot(document.getElementById("root")).render(
  <ParkContext.Provider value={parkInfo}>
    <App />
  </ParkContext.Provider>
);
```

Key point taught:
- **Provider** makes the context value available to all children under it.
- Now `Child2` can safely do:
  - `data.rollerCoaster`
  - `data.ticketForRollerCoaster()`

Also taught:
- Context can share **functions** (actions) not only data.

---

## Commit `fe3de4c` — “context applied on Movies App”

### Step 5: Small adjustment in `main.jsx`
This commit modifies `main.jsx` again (same Provider pattern).

What stays the same (the core lesson):
- Context is still provided at the top-level with:
  - `<ParkContext.Provider value={parkInfo}>`

Why this commit matters in class:
- reinforces that **Provider placement** is what matters most:
  - wrap high enough so all needed components can consume it

---

## Summary (exact “class takeaway”)
- **Create context**: `React.createContext()`
- **Provide value**: `<MyContext.Provider value={...}>`
- **Consume value**: `useContext(MyContext)`
- Use Context when the same data/functions are needed in many components, especially deep children.

---

## Quick glossary (as used in class)
- **Context**: a shared data channel
- **Provider**: sets the value for that channel
- **Consumer**: reads the value (in class we used `useContext`)
- **Prop drilling**: passing props through layers that don’t need them

