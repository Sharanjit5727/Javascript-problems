
function reverse(sentence, letter) {

    let _ar = sentence.split(/(\s+)/);
  
    return _ar.map(ele => {
      if (ele.startsWith(letter)) {
  
        ele = ele.split("").reverse().join("");
      }
  
      return ele;
    }).join("");
  
  
  }
  
  console.log(reverse("word searches are super fun", "s"));
  console.log(reverse("first man to walk on the moon", "m"));
  console.log(reverse("peter piper picked pickled peppers", "p"))