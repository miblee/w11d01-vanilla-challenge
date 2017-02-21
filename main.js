var count = 0

var $countBtn = document.getElementById('countBtn')
$countBtn.addEventListener('click', function(evt){
  $countBtn.innerText = count++
});


var $colorInput = document.getElementById('colorInput');

$colorInput.addEventListener('keypress', function(evt){
  var $colorList = document.getElementById('colorList');
  var colorVal = document.createElement('li');
  colorVal.textContent = $colorInput.value;
  if(evt.keyCode===13){
    $colorList.appendChild(colorVal);
    document.body.style.backgroundColor = colorVal.textContent;
  }
})
