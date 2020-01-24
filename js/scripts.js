$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val().split("");
    console.log(sentence);
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for(var i = 0; i < sentence.length; i++){
      vowels.forEach(function(vowel) {
        if (vowel === sentence[i]) {
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