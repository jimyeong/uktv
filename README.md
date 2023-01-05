##### date: 05.01.2023

##### name: jimyeong jung(jimmy)

---

## Solution and Comment

```
structure

// Main.js

<Context.Provider>
    <SearchBar/>
    <SortController/>
    <ResultPanel>
<Context.Provider>

```

- used Context API pattern in the Main.js to make the code stay simple and scalable as long as possible.

- used hooks patterns, to maximize reusualblity on React.

- to react to unexpected changes, create ui-confing where mananges colours, responsive break points etc.

- to maximize reusability I devided file trees into common components and specific components that are only used in certain pages.
