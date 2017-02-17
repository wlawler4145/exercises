var stringPrinter = function(starterString){
  $('#output').text(starterString);
}

var funnySentence = function(noun, adjective, verb, adverb) {
    var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

    stringPrinter(sentence);

}

//While loop to invoke it 5 times

var madLib = function(){
  var n = 0;
    while (n < 5){
      funnySentence ("hairy", "rainbow", "shower", "gently");
    n++;
  }
}

document.querySelector('#target').addEventListener('click', function(){
    console.log('same deal');


});

$('#target').on('click', function(){
  console.log('You');
});

$('div').click(function(){
  $('div p').show().css('color','red').text('booyah')
})
