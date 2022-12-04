//Copyright © FeliX#7578(discord) - December 2022

//makes code work no deletey plz
document.addEventListener("DOMContentLoaded", domloaded, false);
function domloaded() {
  
  //Render MAIN display
  var tCtxMAIN = document.getElementById("textCanvasMAIN").getContext("2d"), //Hidden canvas
    imageElemMAIN = document.getElementById("imageMAIN"); //Image element
  var maintext = document.getElementById("text");
  var bottomtext = document.getElementById("bottomtext");
  var routenummer = document.getElementById("routenummer");
  var mainkleur = document.getElementById("MTkleur");
  var bottomkleur = document.getElementById("BTkleur");
  var routekleur = document.getElementById("RNkleur");

  // Text input element
  document.getElementById("userinput").addEventListener(
    "keyup",
    function () {
      /*-- size canvas --*/
      tCtxMAIN.canvas.width = 870.8;

      //    1 OP 6.22 IS DE ASPECT RATIO xxjes
      //     breed= 870,8 & hoog 140

      //CHARACTER (numbers) WIDTH AT 10 PX is 1 SO 10:1

      //width helper
      var widthhelp = tCtxMAIN.canvas.width;

      var rnLen = tCtxMAIN.measureText(routenummer.value).width;
      var terugnaarlinks = 870 - rnLen * 14 - 10;

      //black background//
      tCtxMAIN.fillStyle = "#000000";
      tCtxMAIN.fillRect(0, 0, tCtxMAIN.canvas.width, tCtxMAIN.canvas.height);

      //text//
      tCtxMAIN.fillStyle = mainkleur.value; //ignore these lol, dont think they do anything.. kinda forgot lol
      tCtxMAIN.font = "80px MONOled"; //max width 430  height 100
      tCtxMAIN.fillText(maintext.value, 10, 60);

      tCtxMAIN.fillStyle = bottomkleur.value;
      tCtxMAIN.font = "40px MONOled"; //max width 430  height 40
      tCtxMAIN.fillText(bottomtext.value, 10, 120);

      tCtxMAIN.fillStyle = routekleur.value;
      tCtxMAIN.font = "140px MONOled"; //max width 160    height 160
      tCtxMAIN.textAlign = "end";
      tCtxMAIN.fillText(routenummer.value, widthhelp, 110);

      //debug//
      var Mdebugmain = document.getElementById("Mdebugmain");
      Mdebugmain.textContent = text.value.length;

      var Mdebugsub = document.getElementById("Mdebugsub");
      Mdebugsub.textContent = bottomtext.value.length;

      var Mdebugnum = document.getElementById("Mdebugnum");
      var MdebugnumL = document.getElementById("MdebugnumL");
      Mdebugnum.textContent = routenummer.value.length;
      MdebugnumL.textContent = rnLen;

      //remove waitText
      var statictext = document.getElementById("waittext");
      waittext.textContent = "";
      //send data to client//
      imageElemMAIN.src = tCtxMAIN.canvas.toDataURL();
      console.log(imageElemMAIN.src);
    },
    false
  );
  //END

  //Render SIDE DISPLAY
  var tCtxSIDE = document.getElementById("textCanvasSIDE").getContext("2d"), //Hidden canvas
    imageElemSIDE = document.getElementById("imageSIDE"); //Image element
  var maintext = document.getElementById("text");
  var routenummer = document.getElementById("routenummer");
  var mainkleur = document.getElementById("MTkleur");
  var routekleur = document.getElementById("RNkleur");

  // Text input element
  document.getElementById("userinput").addEventListener(
    "keyup",
    function () {
      /*-- size canvas --*/
      tCtxSIDE.canvas.width = 1000;

      //    1 OP 6.22 IS DE ASPECT RATIO xxjes
      //     breed= 870,8 & hoog 140

      //CHARACTER (numbers) WIDTH AT 10 PX is 1 SO 10:1

      //width helper
      var widthhelp = tCtxSIDE.canvas.width;

      var rnLen = tCtxSIDE.measureText(routenummer.value).width;
      var terugnaarlinks = 1000 - rnLen * 14 - 10;

      var rout = tCtxSIDE.measureText(routenummer.value).width;
      var weghier = rout * 14 + 10;

      //black background//
      tCtxSIDE.fillStyle = "#000000";
      tCtxSIDE.fillRect(0, 0, tCtxSIDE.canvas.width, tCtxSIDE.canvas.height);

      //text//
      tCtxSIDE.fillStyle = mainkleur.value; //ignore these lol, dont think they do anything.. kinda forgot lol
      tCtxSIDE.font = "100px MONOled"; //max width 430  height 100
      tCtxSIDE.textAlign = "end";
      tCtxSIDE.fillText(maintext.value, widthhelp, 100);

      tCtxSIDE.fillStyle = routekleur.value;
      tCtxSIDE.font = "140px MONOled"; //max width 160    height 160
      tCtxSIDE.textAlign = "start";
      tCtxSIDE.fillText(routenummer.value, 10, 110);

      //debug//

      var Sdebugmain = document.getElementById("Sdebugmain");
      Sdebugmain.textContent = text.value.length;

      var Sdebugnum = document.getElementById("Sdebugnum");
      Sdebugnum.textContent = routenummer.value.length;
      SdebugnumL.textContent = rnLen;

      //send data to client//
      imageElemSIDE.src = tCtxSIDE.canvas.toDataURL();
      console.log(imageElemSIDE.src);
    },
    false
  );
  //END

  //Render REAR DISPLAY
  var tCtxREAR = document.getElementById("textCanvasREAR").getContext("2d"), //Hidden canvas
    imageElemREAR = document.getElementById("imageREAR"); //Image element

  var routenummer = document.getElementById("routenummer");
  var routekleur = document.getElementById("RNkleur");

  // Text input element
  document.getElementById("userinput").addEventListener(
    "keyup",
    function () {
      /*-- size canvas --*/
      tCtxREAR.canvas.width = 260;

      //center align helpr
      var center = tCtxREAR.canvas.width / 2;

      //    1 OP 6.22 IS DE ASPECT RATIO xxjes
      //     breed= 870,8 & hoog 140

      //CHARACTER (numbers) WIDTH AT 10 PX is 1 SO 10:1

      //black background//
      tCtxREAR.fillStyle = "#000000";
      tCtxREAR.fillRect(0, 0, tCtxREAR.canvas.width, tCtxREAR.canvas.height);

      //text//
      tCtxREAR.fillStyle = routekleur.value;
      tCtxREAR.textAlign = "center";
      tCtxREAR.font = "140px MONOled"; //max width 160    height 160
      tCtxREAR.fillText(routenummer.value, center, 110);

      //debug//
      var Rdebugnum = document.getElementById("Rdebugnum");
      Rdebugnum.textContent = routenummer.value.length;

      //send data to client//
      imageElemREAR.src = tCtxREAR.canvas.toDataURL();
      console.log(imageElemREAR.src);
    },
    false
  );
} //do not delete this } lol
