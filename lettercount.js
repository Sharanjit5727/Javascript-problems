function letter_count(letter,str) {
    var count=0;
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)==letter)
        {
            count++
        }
    }
    return count;
    
}
console.log(letter_count('a','edabit'));
console.log(letter_count("c", "Chamber of secrets"));
console.log(letter_count("b", "big fat bubble"));