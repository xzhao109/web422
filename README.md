# WEB422

Cyclic link: https://long-plum-dalmatian-gear.cyclic.app/

## Assigment 1 (movieAPI):
**Objective:**  
**Obtain the sample data loaded in MongoDB Atlas as well as to create (and publish) a simple Web API to work with the data.**

1# mongoparseerror: mongodb+srv uri cannot have port number  
> Issue: password inclucing # change to 23%  
Answer: https://stackoverflow.com/questions/69290528/mongodbsrv-uri-cannot-have-port-number

2# After cyclic completes its build step, you will notice that it will prompt you to enter a value for MONGODB_CONN_STRING.</br>
> Issue:   
1.need uoplad .env file to github  
2.create var in cyclic (match .env string)  
3.connect to severless (mongodb)  
Answer: https://docs.cyclic.sh/how-to/using-mongo-db

## Assigment 2 (client-side):
**Objective:**
**To work with our "Movies" API (from Assignment 1) on the client-side to produce a rich user interface for accessing data.**

1# Table headers are split between two lines of text 
> Before:  
> Run  
> Time  
> Answer: use the white-space: nowrap; in css file https://stackoverflow.com/questions/54059568/my-table-headers-are-split-between-two-lines-of-text-and-i-cant-figure-out-why  
> After:  
> Run Time

2# How can I access and process nested objects, arrays, or JSON? 
> Source data (nested object): https://gyazo.com/d49ded09284d0ff15d00a1b597fae54b  
> Answer: https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json   
> If const foo = {bar: {baz: 42}};
> How to access: console.log(foo.bar.baz); // 42

3# Expanded knowledge (join/ NA)
```javascript
      let moviesRows = `
      ${data
        .map(
          (movie) =>
            `<tr data-id=${movie._id}>
                  <td>${movie.rated || "N/A"}</td>
                  <td>${
                    Math.floor(movie.runtime / 60) +
                    ":" +
                    (movie.runtime % 60).toString().padStart(2, "0")
                  }</td>  
              </tr>`
        )
        .join("")}
      `;
```
OR
```javascript
<strong>Cast:</strong> ${data.cast.join(", ") || "N/A"}<br><br>
```

## Assigment 3 (my-app):
**Objective:**
To continue to work with our "Movies" API (from Assignment 1) on the client-side to produce a rich user interface for
accessing data. For this assignment, we will be leveraging our knowledge of React and Next.js to create an interface for
viewing movies. Please Note: Once again, you're free to style your app however you wish. The following specification
outlines how we can use the React-Bootstrap Components (Bootstrap 5). If you wish to add additional images, styles or
functionality, please go ahead.

1# Parsing error : Cannot find module 'next/babel'
```
{
  "extends": ["next/babel","next/core-web-vitals"]
} 
```
> Answer: https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel

2# "command not found: create-next-app" how do I create a next application?
```
npm install create-next-app
npm run build &&  npm run start 
```
> Answer: https://stackoverflow.com/questions/64149484/command-not-found-create-next-app-how-do-i-create-a-next-application


3# "Attempted import error: 'useSWR' is not exported from 'swr' (imported as 'useSWR').
```
import useSWR from "swr"; -- remove { }
```

## Assigment 4 (my-app):
**Objective:**
To develop a modern, responsive user interface for searching and viewing data on the publicly available Metropolitan
Museum of Art Collection API. We will continue to use our knowledge of React, Next.js and React Bootstrap to develop
our solution. However, if you wish to use a different UI library such as Material Design, etc. or add additional images,
styles or functionality, please go ahead.

1# Error: "DevTools failed to load SourceMap: Could not load content for chrome-extension:..."
> Answer: https://stackoverflow.com/questions/61339968/error-message-devtools-failed-to-load-sourcemap-could-not-load-content-for-chr

2# Getting Uncaught "TypeError: path.split is not a function in react"
> Answer: https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react


3# Uncaught Reference Error: "React is not defined"
> Answer: https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined

4# Style
```javascript
my-2: make the navbar wider
me-2: add whitespace between the button and the string 'search'
ustify-content-end: position the button on the right side of the page
<Form style={{ marginTop: "25px" }} onSubmit={handleSubmit(submitForm)}>
```
