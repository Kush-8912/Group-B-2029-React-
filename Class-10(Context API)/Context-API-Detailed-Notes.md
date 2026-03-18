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

### Diagram: the component tree used in class
This matches the class files (`App.jsx`, `Parent1.jsx`, `Parent2.jsx`, `Child1.jsx`, `Child2.jsx`).

```text
main.jsx
  └── <ParkContext.Provider value={parkInfo}>
        └── <App />
              ├── <Parent1 />
              │     ├── <Child1 />
              │     └── <Child2 />   ✅ needs parkInfo
              └── <Parent2 />
                    └── <Child2 />   ✅ also needs parkInfo
```

Key learning:
- `Child2` appears in multiple places (inside `Parent1` and inside `Parent2`)
- We don’t want to pass the same props down multiple branches

---

### Prop drilling vs Context (side-by-side)

#### If we did it with props (prop drilling)

```text
App
  ├── Parent1 (receives props only to forward them)
  │     └── Child2 (uses props)
  └── Parent2 (receives props only to forward them)
        └── Child2 (uses props)
```

This leads to:
- repeating `parkInfo` in many component props
- “middle components” holding props they don’t use
- more bugs when you rename a prop or add new fields

#### With Context (what we did in class)

```text
main.jsx provides value once
Child2 consumes value directly from Context
```

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

#### Diagram: “empty Context” situation (before Provider)

```text
<App>
  <Child2 />
</App>

Child2 does: useContext(ParkContext)
Result: gets the Context default value (here: undefined),
because no Provider exists above it yet.
```

Important:
- `createContext()` alone does NOT “magically” create data.
- You must wrap your component tree with `<ParkContext.Provider value={...}>`.

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

### Diagram: “Provider makes data available”

```text
ParkContext.Provider(value = parkInfo)
  └── App
        └── Parent1 / Parent2
              └── Child2

Child2 -> useContext(ParkContext) -> parkInfo
```

### What exactly can you store in `value`?
In class we stored an object:
- **strings**: `parkName`, `rollerCoaster`, `waterSlide`, `merryGoRound`
- **functions**: `ticketForRollerCoaster()`, `ticketforWaterSlide()`, `ticketForMerryGoRound()`

So `value` can contain:
- data (primitives/objects/arrays)
- functions (actions)
- any combination as one object

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

## Extra examples (additional practice beyond class)
These examples are **not from the class code**, but they use the same concept: Create → Provide → Consume.

### Example A: Theme Context (light/dark)

```jsx
// ThemeContext.jsx
import React from "react";
export const ThemeContext = React.createContext();
```

```jsx
// main.jsx
const themeValue = { theme: "dark" };
createRoot(root).render(
  <ThemeContext.Provider value={themeValue}>
    <App />
  </ThemeContext.Provider>
);
```

```jsx
// AnyChild.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function AnyChild() {
  const { theme } = useContext(ThemeContext);
  return <div>Theme is {theme}</div>;
}
```

### Example B: Auth Context (user + login/logout actions)

```jsx
import React, { useState } from "react";
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(name) {
    setUser({ name });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Then consume it anywhere:

```jsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <button onClick={logout}>Logout {user.name}</button>
  ) : (
    <div>Not logged in</div>
  );
}
```

### Example C: Cart Context (array + add/remove)
This mirrors “watchlist/cart” style projects:

```jsx
export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
```

---

## Common mistakes (high value)
- **Provider missing**: `useContext()` returns `undefined` (or default value).
- **Provider placed too low**: some components won’t “see” it.
- **Forgetting to export/import the correct context**: importing the wrong context file leads to `undefined`.
- **Overusing context**: not everything needs to be global—local state is simpler when possible.

---

## Quick glossary (as used in class)
- **Context**: a shared data channel
- **Provider**: sets the value for that channel
- **Consumer**: reads the value (in class we used `useContext`)
- **Prop drilling**: passing props through layers that don’t need them

