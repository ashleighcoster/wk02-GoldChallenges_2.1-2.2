/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

//I have no idea what I'm doing yet do just pushing what I have so far based on notes. I haven't been able to finish all of the Week 4 notes/modules so I'm going back hoping that more information is in there on how to do these challenges. Or I will be waiting for class on Tuesday and/or researching more information on my own to learn how to do this.

const func = async() => {
    await fetch('https://swapi.co/api/people/10')
    .then(res => res.json())
    .then(json => console.log(json))
    console.log('this should print last');
}

func()



// asyncFunc = async () => {
//     const result = await someAsyncFunc();
// }