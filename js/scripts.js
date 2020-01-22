$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val().split("");
    console.log(sentence);
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for(var i = 0; i < sentence.length; i++){
    // var newsentence = sentence.map(function(letter) {
      vowels.forEach(function(vowel) {
        if (vowel === sentence[i]) {
          // sentence[i].replace(sentence[i], "-");
          // console.log(letter)
          // sentence.splice(sentence[i]);
          // console.log(sentence);
          // sentence.push("-");
          // sentence.push("-");
          sentence[i] = "-"
         
          
        }
      });
    };
    var newSentence = sentence.join("");
    console.log(typeof(newSentence))
    $(".results").append("<p>" + newSentence + "</p>")
    $(".results").show();
  });
});