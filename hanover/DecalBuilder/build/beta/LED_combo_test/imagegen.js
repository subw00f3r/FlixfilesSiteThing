var tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
    imageElem = document.getElementById('image'); //Image element
  
// Text input element
document.getElementById('text').addEventListener('keyup', function() {
  tCtx.canvas.width = tCtx.measureText(this.value).width;
  tCtx.fillText(this.value, 0, 10);
  imageElem.src = tCtx.canvas.toDataURL();
  console.log(imageElem.src);
}, false);