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
    'What\'s :num1 + :num2': plus,
    'What\'s :num1 to the power of :num2': powerOf,
    'What\'s :num1 times :num2': times

    };




    //Add our commands to annyang
    annyang.addCommands(commands);
    annyang.debug();

     //Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

//Functions here
function plus(num1, num2){

        var total = parseInt(num1) + parseInt(num2);
        $('h1').html(total);
}
function times (num1, num2){
        var total = parseInt(num1) * parseInt(num2);
        $('h1').html(total);
}
function powerOf(num1, num2){
        var total = Math.pow(num1, num2);
        $('h1').html(total);
}
function date(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  $('h1').html(day+'/'+month+'/'+year);

}
