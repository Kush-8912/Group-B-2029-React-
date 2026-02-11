This is a **fantastic question to ask as a teacher**, by the way.
When students ask *good* questions about state, it means they’re actually thinking beyond syntax.

Below is a **curated list of questions students can (and should) ask** after **Class 3**, based **exactly** on what you taught. I’ve grouped them by **theme and depth**, so you can also use this as:

* a **Q&A discussion guide**
* a **reflection worksheet**
* an **oral viva / assessment rubric**
* or a **“good questions vs great questions” slide**

---

# Questions Students Can Ask After Class 3: React State

---

## 1. Fundamental Understanding Questions (Healthy Curiosity)

These indicate the student is trying to **build the mental model**.

1. **What exactly happens when we call `setState` (or `setCount`) inside a component?**
2. **Why does React re-render the component when state changes, but not when a normal variable changes?**
3. **Is state stored inside the component function, or somewhere else in React?**
4. **Why do we get the updated state value only on the next render, not immediately after calling the setter?**
5. **Can a component have state without rendering anything on the screen?**
6. **Why do we need state at all—why not just use variables?**

---

## 2. `useState` Hook–Specific Questions

These show they are zooming into **how the hook works**.

7. **Why does `useState` return an array and not an object?**
8. **Why do we usually name the setter as `setSomething`? Is it required?**
9. **Can I call `useState` inside an `if` or a loop? Why or why not?**
10. **What happens if I call `useState` multiple times in one component?**
11. **How does React know which state belongs to which `useState` call?**
12. **Why is the initial value used only on the first render?**

---

## 3. State Updates & Re-rendering

These are *excellent* questions — they show the student is noticing real behavior.

13. **Why does my component re-render even when I update a state with the same value?**
14. **Why do all JSX expressions re-run when state changes, not just the part that changed?**
15. **If I put `console.log` inside a component, why does it run again when state updates?**
16. **Does updating one state variable re-render the whole component or only part of it?**
17. **Can multiple state updates happen in one render?**
18. **What happens if a parent re-renders—does the child’s state reset?**

---

## 4. Controlled Inputs & Forms (Very Common Student Confusion)

These questions usually come when students struggle with forms.

19. **Why do we need `value={state}` if we already have `onChange`?**
20. **What happens if I remove `value={state}` from an input?**
21. **Why is React called the “single source of truth” for controlled inputs?**
22. **Why does resetting state clear the input automatically?**
23. **Why does the input stop working if I forget `onChange` but keep `value`?**
24. **Should every input always be controlled?**
25. **When would uncontrolled inputs be okay?**

---

## 5. Multiple State Variables & Forms

These show the student is thinking about **scaling**.

26. **Is it better to use one `useState` per field or one object for the whole form?**
27. **Why did we use multiple `useState` calls instead of one object state?**
28. **What happens if I reset only one field in a multi-field form?**
29. **Can different state variables update independently?**
30. **Does updating one state variable affect the others?**

---

## 6. Conditional Rendering (Logic + JSX)

These questions show conceptual maturity.

31. **What is the difference between using `&&` and a ternary for conditional rendering?**
32. **Why does `{false && <p>Text</p>}` render nothing, but `{0 && <p>Text</p>}` shows `0`?**
33. **When should I prefer a ternary instead of `&&`?**
34. **Can I conditionally render multiple elements at once?**
35. **Is conditional rendering the same as hiding elements with CSS?**
36. **Does React remove elements from the DOM when condition is false?**

---

## 7. Boolean State & Toggles

These questions show they’re thinking in **UI patterns**.

37. **Why do we usually store toggles as booleans instead of strings like `"show"` / `"hide"`?**
38. **What’s the difference between toggling with `!state` vs explicitly setting `true` or `false`?**
39. **Is it bad practice to have too many boolean states?**
40. **Can two buttons update the same boolean state differently?**

---

## 8. State vs Props (Critical Conceptual Boundary)

If students ask these, you’re winning as a teacher.

41. **Why can’t a child component directly change props?**
42. **What happens if I try to modify a prop directly?**
43. **When should something be state and when should it be a prop?**
44. **Why is user data better passed as props but `showEmail` kept as state?**
45. **Can props change over time like state?**
46. **If props change, does the component re-render?**

---

## 9. Immutability & “Why Setters Exist”

These are *advanced-but-important* questions.

47. **Why does React care if we mutate state directly?**
48. **Why doesn’t React always detect changes when objects or arrays are mutated?**
49. **What does “immutability” actually mean in simple terms?**
50. **Why is `count = count + 1` wrong but `setCount(count + 1)` correct?**
51. **How does React know state has changed if values look similar?**

---

## 10. Common “Bug-Based” Questions (Very Real Student Thoughts)

These usually come from frustration — but they’re gold.

52. **Why is my input not updating even though I wrote `onChange`?**
53. **Why does my button click not change the UI even though the function runs?**
54. **Why does my state reset when I refresh the page?**
55. **Why does my component keep re-rendering infinitely?**
56. **Why does my state not update when I log it immediately after `setState`?**

---

## 11. Meta / Big-Picture Questions (Signs of Deep Thinking)

These are *excellent* closing-class questions.

57. **How does React remember state between renders if the component function runs again?**
58. **Is state tied to the component instance or the function call?**
59. **How does React know which state belongs to which component when there are many?**
60. **What problems would we face if React didn’t have state?**
61. **How does this concept scale in large applications?**

---


