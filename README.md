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
