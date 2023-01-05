##### date: 05.01.2023

##### name: jimyeong jung(jimmy)

---

## to see the demo

```
$ npm install
$ npm run start

```

<br/>

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

- used Context API pattern in the Main.js to make the code stay simple and scalable. it will make me easy to add some features more in the future and manage them. I also distincted the feature of each components.

- used hooks patterns, to maximize reusualblity on React.

- to react to unexpected changes, created ui-confing where mananges colours, responsive break points etc.

- to maximize reusability I devided the file tree into common components and specific components that are only used in certain pages.
