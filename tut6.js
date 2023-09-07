const name ='Vansh';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = " <h1> this is heading</h1> "  + 
            "<p> This is My para</p> " ;
html = html.concat('vansh' , ' sutariya');
console.log(html);
let name1;
name1 = 'vansh';
name1=name1.concat( ' ','sutariya');
console.log(name1);
//console.log(html.length);
//console.log(html.toLocaleUpperCase());
//console.log(html.toLowerCase());
//console.log(html[8]);
/*console.log(html.indexOf('this'));
console.log(html.lastIndexOf('v'));
console.log(html.charAt(6));
console.log(html.endsWith('vansh'));
console.log(html.includes('suta'))
console.log(html.substring(1,5));
console.log(html.split('<'))
console.log(html.replace('this' , 'it')); */
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello  ${name}
            <h1> This is heading </h1>
            <p> YOU like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;

/*The dollar function, $(), can be used as shorthand 
for the getElementById function. 
To refer to an element in the Document 
Object Model (DOM) of an HTML page,
 the usual function identifying an element is: document. */