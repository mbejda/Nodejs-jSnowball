#Nodejs jSnowball Stemmer<br/>
Snowball is a small string processing language designed for creating stemming algorithms for use in Information Retrieval. The Nodejs verion of the Snowball Stemmer supports 17 languages <br>
The Snowball stemmer can be found on their homepage. http://snowball.tartarus.org
<hr>
## Supported Languages 
- danish
- dutch
- english
- finnish
- german
- hungarian
- italian
- norwegian
- romanian
- russian
- spanish
- swedish
- porter
- portuguese
- romanian
- spanish
- turkish
<hr>

## Installation
The Snowball stemmer uses *Node-Java* internally. Make sure your system is configured properly to run *Node-Java*.
https://github.com/joeferner/node-java<br>

```
npm install jsnowball --save
```

<hr>

## Usage


```
var SnowBall = require('jsnowball');
var snowBall = new SnowBall('english');
snowBall.stem('Checks if word is stemmed',function(error,response){
console.log(response);/// [ 'Check', 'if', 'word', 'is', 'stem' ]

});
```
*Tested on:*
- Node.js : v0.12.7
- java version "1.8.0_31"
- Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
- Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)




<hr>

If you have any questions or reporting an issue send me a tweet  *@notmilobejda*.<br>
[mbejda.com](http://mbejda.com)
