if (annyang) {
   //Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'hello': function() {
        $('h1').html("Hello!");


      },
      'Hey Jarvis': function(){
        $('h1').html("Yes Sir?");
      },
      'say hi to *name': function(name) {
        $('h1').html("Hi "+name);
      },
      'Say hello to Dad': function(){
        $('h1').html("Hello Father!");
      },
      'What is the date today': date,
      'who are you': function(){
        $('h1').html("I am Jarvis");
      },
      'What\'s the date today': date,
      'who made you': function(){
        $('h1').html("Harry Whitehead");
      },
      '(What\'s) :num1 + :num2': plus,
      '(What\'s) :num1 to the power of :num2': powerOf,
      '(What\'s) :num1 ^ :num2': powerOf,
      '(What\'s) :num1 times :num2': times,
      '(What\'s) :num1 divided by :num2': divedBy,
      '(What\'s the) square root of :num1': squareRoot,
      '(What\'s the) cube root of :num1': cubeRoot,
      ':rootNumber index :num1': otherRoots,
      'Return to the main page': release
    };




    annyang.addCommands(commands);
    annyang.debug();
    //Get annyang started listening to things recording/inputed by the mic
    annyang.start();
}
//Functions here
function plus(num1, num2){

        var total = parseInt(num1) + parseInt(num2);
        $('h1').html(total);
        console.log(total);
}
function release(){
  //Return to the main page.
  window.location.href = "http://vaporz.groklinux.com/index.html";
}

function divedBy(num1, num2){

        var total = parseInt(num1) / parseInt(num2);
        $('h1').html(total);
        console.log(total);
}
function times (num1, num2){
        var total = parseInt(num1) * parseInt(num2);
        $('h1').html(total);
        console.log(total);
}
function powerOf(num1, num2){
        var total = Math.pow(num1, num2);
        $('h1').html(total);
        console.log(total);
}
function squareRoot(num1){
        var total = Math.pow(num1, 0.5);
        $('h1').html(total);
        console.log(total);
}
function cubeRoot(num1){
        var total = Math.cbrt(num1);
        $('h1').html(total);
        console.log(total);
}
function otherRoots(rootNumber, num1){
    var total = Math.pow(parseInt(num1), 1/rootNumber);
    $('h1').html(total);
    console.log(total);
}


function date(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  $('h1').html(day+'/'+month+'/'+year);

}
