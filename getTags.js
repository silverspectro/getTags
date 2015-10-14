/*
Take an input text and return an Array of words that are said the most, sorted by number of appearance
@text {String} the text to be parsed
TODO pertinence + duplicate, test on long text 
*/

function getTags(text) {
  var tags = [],
      words = text.match(/\w+/gm),
      indices = [],
      tempArr = [],
      excludeWords = ["pour","elle","nous","vous","ils","elles","mais","est","donc","car","ors","puis","its","but","and","with","for","within","there","they","would","the","you","can","like","that","was","have","had","who","why","where","whom","what","isn","not"];

  words.forEach(function(word,index){
    var idx = words.indexOf(word);


      if(word.length > 2) {
        var ob  = {word:word, presence: 1,index:words.indexOf(word), length:word.length};

        while(idx != -1) {
          ob.presence++;
          words.splice(index, 1);
          idx = words.indexOf(word, idx+1);
        }

        indices.push(ob);
    }

  });


  indices.sort(function(a,b){
    return b.presence - a.presence;
  });

  excludeWords.forEach(function(w){
    var reg = new RegExp(w,"i");
    for(var i = 0; i < indices.length; i++) {
      if(!reg.test(indices[i].word))tempArr.push(indices.splice(i, 1));
    }
  });

  tempArr.forEach(function(it,index){
    it.forEach(function(g){
      if(tags.indexOf(g.word) == -1)tags.push(g.word);
    });
  });

  return tags;
}
