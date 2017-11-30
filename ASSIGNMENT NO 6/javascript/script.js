//Load all the HTML element then start executing the code inside it.
var coordinateArray = []
$('coordinate').ready(function(){
  var canvas = document.getElementById('coordinate');
  context = canvas.getContext('2d');
  var initialvalue = new InitialValue(canvas.width,canvas.height);  // InitialValue Constructor
  initialvalue.drawXYLine();
  context.save();
  var operation = new RetrieveValue();

  $('.actiondraw').click(function(){
    RetrieveValue();
    operation.validateValue(equationInput);
    operation.calculate(equationInput,stepInput,inBound,outBound);
    drawEquationLine(coordinateArray);
  }); // .click function   
 
  $('.actionreset').click(function(){
    operation.reset();
    context.resetTransform();
    context.clearRect(0,0,initialvalue.width,initialvalue.height);
    context.beginPath();
    initialvalue.drawXYLine();
  }); // click function 
}); // ready function

// -----------------------------------------------------Javascript Function----------------------------------------------- 

// To draw X-Y axis line

function InitialValue(width,height){
  this.width =  width;
  this.height = height;
}

InitialValue.prototype.drawXYLine = function(){
  var startPoint =0;
  var endPoint =0;

// To move coordinate at center of canvas and a circle to indicate center
  context.translate(this.width/2,this.height/2); // to take 0,0 cordinate at center
  context.arc(startPoint, endPoint, 3, 3, 9);
  context.fill(); 

// X axis line
  context.beginPath();
  context.moveTo(-350,startPoint);
  context.lineTo(350,startPoint);
  context.stroke();

// Y axis line
  context.beginPath();
  context.moveTo(endPoint,300);
  context.lineTo(endPoint,-300);
  context.stroke();

} // _drawXY()


//get the value from user
function RetrieveValue(){
  var equationinput,stepInput,inBound,outBound;
  this.equationInput = $('#equationInput').val();
  this.stepInput = $('#stepInput').val();
  this.inBound = $('#inBoundInput').val();
  this.outBound = $('#outBoundInput').val();
}

// Function to check the Equation
RetrieveValue.prototype.validateValue = function(equation) {
  var format = /[y]+\=[\\-]?[\d]+[x][\\+|\\-][\d]+/;
  regexResult = format.exec(equation);
  if(regexResult == null){
    alert("ENTER THE VALID EQUATION");
    equation = $('#equationInput').val("");
  }
  else if(stepInput == ""){
    alert("ENTER THE STEP VALUE");
  }
  else if(inBound == ""){
    alert("ENTER THE INBOUND VALUE");
  }
  else if(outBound == ""){
    alert("ENTER THE OUTBOUND VALUE");
  }
}// _validateValue

// To calculate the Equation with the user input value
RetrieveValue.prototype.calculate = function(equationinput,stepinput,inbound,outbound) {
  var stepLength = stepinput,finalResult,replaceX,valueX,nextInBound,regexX = /[x]/;
  for(i=0;i<=stepLength;i++)
  {    
    nextInBound = eval((outbound-inbound)/stepinput);
    valueX = equationinput.charAt(equationinput.search(regexX)); //to search X in equation and finding out the charAt that position search return index. 
    replaceX = equationinput.replace(valueX, "*"+inbound);
    finalResult = eval(replaceX.toString());
    coordinateArray.push({X: inbound,Y:finalResult}); // stored in coordinateArray in key-value pair
    inbound = parseInt(inbound)+parseInt(nextInBound); // inbound value is add by nextInbound;
    stepinput--;
  }
}

// Reset the value of the fields
  RetrieveValue.prototype.reset = function(){
    equationinput = $('#equationInput').val("");
    stepinput = $('#stepInput').val("");
    inbound = $('#inBoundInput').val("");
    outbound = $('#outBoundInput').val("");    
    coordinateArray=[];
}

// To draw the Equation Line
function drawEquationLine(plotxy){
  for(var i=0;i<plotxy.length;i++){
    for(var j=1;j<plotxy.length;j++){
      context.beginPath();
      context.moveTo(plotxy[i].X,-plotxy[i].Y);
      context.lineTo(plotxy[j].X,-plotxy[j].Y);
      context.fillText([plotxy[i].X,plotxy[i].Y],plotxy[i].X,-plotxy[i].Y);
      context.stroke();
    }
  }
}