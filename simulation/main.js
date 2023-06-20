var i = 0;
var txt = 'Click on add button to add material.';
var speed = 50;

var marks=0;

function navNextstrt()

{
  document.getElementById("canvas_start").style.visibility="hidden";
  document.getElementById("canvas0").style.visibility="visible";

  dronefirstcome()
 
}

 

    function navNext2()

{
  document.getElementById("canvas0").style.visibility="hidden";
  document.getElementById("canvas2").style.visibility="visible";

  setTimeout(function()
  {
    var x= document.getElementById('aud_precautions');
        x.play();
   },1000);

  setTimeout(function()
  {

 $( "#highlighttxt3" ).delay(200).fadeIn(2000);
$( "#blkimg" ).delay(200).fadeIn(2000);

setTimeout(function()
  {
    var x= document.getElementById('pre3');
        x.play();
   },1000);


setTimeout(function()
  {
    document.getElementById("prelist3").style.visibility="visible";
    document.getElementById("prelist3").style.animation="precaution_come1 4s forwards"; 
    document.getElementById("highlighttxt3").style.visibility="hidden";
    // document.getElementById("blkimg").style.visibility="hidden";
$( "#blkimg" ).delay(200).fadeOut(1000);
  },4500); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt2" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre2');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist2").style.visibility="visible";
      document.getElementById("prelist2").style.animation="precaution_come2 4s forwards"; 
      document.getElementById("highlighttxt2").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6500);
  },9000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt1" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre1');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist1").style.visibility="visible";
      document.getElementById("prelist1").style.animation="precaution_come3 4s forwards"; 
      document.getElementById("highlighttxt1").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },18000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt4" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre4');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist4").style.visibility="visible";
      document.getElementById("prelist4").style.animation="precaution_come4 4s forwards"; 
      document.getElementById("highlighttxt4").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },5000);
  },27000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt5" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre5');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist5").style.visibility="visible";
      document.getElementById("prelist5").style.animation="precaution_come5 4s forwards"; 
      document.getElementById("highlighttxt5").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },36000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt6" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre6');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist6").style.visibility="visible";
      document.getElementById("prelist6").style.animation="precaution_come6 4s forwards"; 
      document.getElementById("highlighttxt6").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },45000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt7" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre7');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist7").style.visibility="visible";
      document.getElementById("prelist7").style.animation="precaution_come7 4s forwards"; 
      document.getElementById("highlighttxt7").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6000);
  },55000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt8" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre8');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist8").style.visibility="visible";
      document.getElementById("prelist8").style.animation="precaution_come8 4s forwards"; 
      document.getElementById("highlighttxt8").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },64000);

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt9" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre9');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist9").style.visibility="visible";
      document.getElementById("prelist9").style.animation="precaution_come9 4s forwards"; 
      document.getElementById("highlighttxt9").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },73000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt10" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre10');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist10").style.visibility="visible";
      document.getElementById("prelist10").style.animation="precaution_come10 4s forwards"; 
      document.getElementById("highlighttxt10").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },82000); 

setTimeout(function()
  {
    document.getElementById("nextButton2").style.visibility="visible";
    document.getElementById("nextButton2_skp").style.visibility="hidden";

   },90000);

 },3000);

}
 

function navNext3()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_plate").slideDown("slow");
    
  },2000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_introcplate');
        x.play();

   },3500);

 setTimeout(function()
  {

  document.getElementById("okbtn_cplate").style.visibility="visible";
  document.getElementById("skpbtn_cplate").style.visibility="hidden";
    
  },25000);

}

function navNext3_skp()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_plate").slideDown("slow");
    
  },2000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_introcplate');
        x.play();

   },3500);

 setTimeout(function()
  {

  document.getElementById("okbtn_cplate").style.visibility="visible";
  document.getElementById("skpbtn_cplate").style.visibility="hidden";
    
  },25000);

}


function navNext4()

{
  document.getElementById("canvas3").style.visibility="hidden";
  document.getElementById("canvas4").style.visibility="visible";
  document.getElementById("mrk_01").innerHTML=marks;
}

function cplate_stop()

{
  
  document.getElementById("cplate").style.visibility="hidden";
  document.getElementById("cplate2").style.visibility="visible";

}

function step1_3hide()

{
  
  document.getElementById("step1_3").style.visibility="hidden";
  
}



function dronefirstcome()

{


document.getElementById("drnfirt").style.animation="drnfirt_come 7s forwards";

setTimeout(function()
  {
    typeWriter()
    
 
    var x= document.getElementById('intro1');
        x.play();
   

  },7500);

setTimeout(function()
  {
    typeWriter2()
 
    var x= document.getElementById('intro2');
        x.play();
 
  },10000);

setTimeout(function()
  {
    typeWriter3()
 
    var x= document.getElementById('intro3');
        x.play();
  
  },12000);

setTimeout(function()
  {
    typeWriter4()
 
    var x= document.getElementById('intro4');
        x.play();
 
  },14500);

setTimeout(function()
  {
    typeWriter5()
 
    var x= document.getElementById('intro5');
        x.play();
 
  },16500);

setTimeout(function()
  {
    typeWriter6()
 
    var x= document.getElementById('intro6');
        x.play();

  },18500);

setTimeout(function()
  {
    typeWriter7()
 
    var x= document.getElementById('intro7');
        x.play();
 
  },20500);

setTimeout(function()
  {
    $( "#abttext" ).delay(200).fadeIn(2000);
  },22500);

setTimeout(function()
  {
    document.getElementById("arrowintro1").style.visibility="visible";
  },24000);

}


var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 unit';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 min.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilogram';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }

}



function cplate_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_cplate").style.visibility="hidden";
  document.getElementById("tgt_cplate").style.height="0px";
  document.getElementById("tgt_cplate").style.width="0px";

  document.getElementById("cplate2").style.top="206px";
  document.getElementById("cplate2").style.left="460px";

 setTimeout(function()
  {

   $( "#platezoom" ).fadeIn(1000);

  },1000);

   setTimeout(function()
  {

   $("#intro_soldrod").slideDown("slow");
    
  },3000);

   setTimeout(function()
  {

    var x= document.getElementById('aud_introsold');
        x.play();

   },3500);

    setTimeout(function()
  {

    document.getElementById("skpbtn_sold").style.visibility="hidden";
    document.getElementById("okbtn_sold").style.visibility="visible";

   },19000);


}



function rodmove()

{
  
  document.getElementById("tb_sldrod").style.visibility="hidden";
  document.getElementById("arowdwn").style.visibility="hidden";
  document.getElementById("step3_2").style.visibility="hidden";
  document.getElementById("soldrod").style.visibility="hidden";
  document.getElementById("handrod_wire").style.visibility="visible";
  document.getElementById("handrod_wire").style.animation="sldrodmove 3s forwards";
  document.getElementById("silverhand").style.visibility="visible";
  document.getElementById("silverhand").style.animation="silverhandmove 3s forwards";

  setTimeout(function()
  {

   $( "#soldpoint1" ).fadeIn(1000);
   // document.getElementById("fog1").style.visibility="visible";

   $( "#smoke1" ).fadeIn(1000);
   $( "#smoke1" ).fadeOut(1800);
   $( "#smoke2" ).fadeIn(1800);
   $( "#smoke2" ).fadeOut(2800);
   $( "#smoke3" ).fadeIn(2800);
   $( "#smoke3" ).fadeOut(2800);
  },3000);

  setTimeout(function()
  {

   // document.getElementById("fog1").style.visibility="hidden";
   document.getElementById("handrod_wire").style.animation="sldrodmove_agn 2s forwards";
   document.getElementById("silverhand").style.animation="silverhandmove_agn 2s forwards";

  },5800);

  setTimeout(function()
  {

   $( "#soldpoint2" ).fadeIn(1000);
   // document.getElementById("fog2").style.visibility="visible";

   $( "#smoke1_2" ).fadeIn(1000);
   $( "#smoke1_2" ).fadeOut(1800);
   $( "#smoke2_2" ).fadeIn(1800);
   $( "#smoke2_2" ).fadeOut(2800);
   $( "#smoke3_2" ).fadeIn(2800);
   $( "#smoke3_2" ).fadeOut(2800);
  },7800);

  setTimeout(function()
  {

   // document.getElementById("fog2").style.visibility="hidden";

   document.getElementById("handrod_wire").style.animation="sldrodmove_bck 2.5s forwards";
   document.getElementById("silverhand").style.animation="silverhandmove_bck 2.5s forwards";

  },11200);

  setTimeout(function()
  {

   document.getElementById("silverhand").style.visibility="hidden";
   document.getElementById("handrod_wire").style.visibility="hidden";
   document.getElementById("soldrod").style.visibility="visible";

   $( "#platezoom" ).fadeOut(1000);
   $( "#soldpoint1" ).fadeOut(1000);
   $( "#soldpoint2" ).fadeOut(1000);

   $( "#soldpoint7" ).fadeIn(1000);
   $( "#soldpoint8" ).fadeIn(1000);

  },14600);

  setTimeout(function()
  {
$("#intro_esc").slideDown("slow");
    },16100);

  setTimeout(function()
  {

    var x= document.getElementById('aud_introesc');
        x.play();

   },17600);

  setTimeout(function()
  {

    document.getElementById("skpbtn_esc").style.visibility="hidden";
    document.getElementById("okbtn_esc").style.visibility="visible";

   },33000);
  
}


function esc_stop()

{
  
  document.getElementById("esc").style.visibility="hidden";
  document.getElementById("esc2").style.visibility="visible";

}


function esc_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_esc2").style.visibility="hidden";
  document.getElementById("tgt_esc2").style.height="0px";
  document.getElementById("tgt_esc2").style.width="0px";

  document.getElementById("esc2").style.top="313px";
  document.getElementById("esc2").style.left="714px";
  document.getElementById("esc2").style.height="266px";
  document.getElementById("esc2").style.transform="rotate(312deg)";

  setTimeout(function()
  {

   $( "#esc_soldzoom" ).fadeIn(1000);

  },1000);

  setTimeout(function()
  {

   $("#step3_4").slideDown("slow");

  },3000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp3_4');
        x.play();

   },3500);

  setTimeout(function()
  {

   document.getElementById("arowdwn2").style.visibility="visible";
   document.getElementById("arowdwn2").style.animation="arowdwn_shk 0.5s infinite";
   document.getElementById("tb_sldrod2").style.visibility="visible";

 },7500);

}

function step3_3hide()

{
  
  document.getElementById("step3_3").style.visibility="hidden";
  
}

function rodmove2()

{
  
  document.getElementById("tb_sldrod2").style.visibility="hidden";
  document.getElementById("arowdwn2").style.visibility="hidden";
  document.getElementById("step3_4").style.visibility="hidden";
  document.getElementById("soldrod").style.visibility="hidden";
  document.getElementById("handrod_wire").style.visibility="visible";
  document.getElementById("handrod_wire").style.animation="sldrodmove2 3s forwards";
  document.getElementById("silverhand").style.visibility="visible";
  document.getElementById("silverhand").style.animation="silverhandmove2 3s forwards";

  setTimeout(function()
  {

   $( "#soldpoint3" ).fadeIn(1000);
   // document.getElementById("fog3").style.visibility="visible";

   $( "#smoke1_3" ).fadeIn(1000);
   $( "#smoke1_3" ).fadeOut(1800);
   $( "#smoke2_3" ).fadeIn(1800);
   $( "#smoke2_3" ).fadeOut(2800);
   $( "#smoke3_3" ).fadeIn(2800);
   $( "#smoke3_3" ).fadeOut(2800);

  },3000);

  setTimeout(function()
  {

   document.getElementById("handrod_wire").style.animation="sldrodmove_agn2 2s forwards";
   document.getElementById("silverhand").style.animation="silverhandmove_agn2 2s forwards";

  },5300);

  setTimeout(function()
  {

   $( "#soldpoint4" ).fadeIn(1000);

   $( "#smoke1_4" ).fadeIn(1000);
   $( "#smoke1_4" ).fadeOut(1800);
   $( "#smoke2_4" ).fadeIn(1800);
   $( "#smoke2_4" ).fadeOut(2800);
   $( "#smoke3_4" ).fadeIn(2800);
   $( "#smoke3_4" ).fadeOut(2800);
  },7600);

  setTimeout(function()
  {

   document.getElementById("handrod_wire").style.animation="sldrodmove_bck2 2.5s forwards";
   document.getElementById("silverhand").style.animation="silverhandmove_bck2 2.5s forwards";

  },10000);

  setTimeout(function()
  {

   document.getElementById("silverhand").style.visibility="hidden";
   document.getElementById("handrod_wire").style.visibility="hidden";
   document.getElementById("soldrod").style.visibility="visible";

   $( "#esc_soldzoom" ).fadeOut(2000);
   $( "#soldpoint3" ).fadeOut(2000);
   $( "#soldpoint4" ).fadeOut(2000);

   $( "#soldpoint5" ).fadeIn(2000);
   $( "#soldpoint6" ).fadeIn(2000);

  },12500);

  setTimeout(function()
  {

    $("#note_esc").slideDown("slow");

  },14500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_can3_note');
        x.play();

   },15000);

  setTimeout(function()
  {

    document.getElementById("nextButton3").style.visibility="visible";

   },18500);
  
}


function skp_cplate()

{

const audio1 = document.querySelector("#aud_introcplate");
audio1.pause();
audio1.currentTime = 0;


  $( "#intro_plate" ).fadeOut(1000);
    
  setTimeout(function()
  {

   $("#step1_3").slideDown("slow");

   document.getElementById("cplate").style.animation="cplate_pop 4s infinite";
   document.getElementById("tb_cplatedrag").style.visibility="visible";

   setTimeout(function()
  {

    var x= document.getElementById('aud_stp1_3');
        x.play();

   },500);

   setTimeout(function()
  {

    document.getElementById("123").src="xyz";
    document.getElementById("tgt_cplate").style.visibility="visible";
    document.getElementById("tgt_cplate").style.height="190px";
    document.getElementById("tgt_cplate").style.width="280px";

    document.getElementById("tb_cplatedrag").style.visibility="hidden";

    $('#cplate2').draggable({
    revert: true,
    droptarget: '#tgt_cplate',
    drop: cplate_drop
    });

   },3500);
   
  },3000);

}

function ok_cplate()

{


  $( "#intro_plate" ).fadeOut(1000);
    

 setTimeout(function()
  {

   $("#step1_3").slideDown("slow");

   document.getElementById("cplate").style.animation="cplate_pop 4s infinite";
   document.getElementById("tb_cplatedrag").style.visibility="visible";

   setTimeout(function()
  {

    var x= document.getElementById('aud_stp1_3');
        x.play();

   },500);

   setTimeout(function()
  {

    document.getElementById("tgt_cplate").style.visibility="visible";
    document.getElementById("tgt_cplate").style.height="190px";
    document.getElementById("tgt_cplate").style.width="280px";

    document.getElementById("tb_cplatedrag").style.visibility="hidden";

    $('#cplate2').draggable({
    revert: true,
    droptarget: '#tgt_cplate',
    drop: cplate_drop
    });

   },3500);
   
  },3000);


}



function skp_sold()

{

const audio1 = document.querySelector("#aud_introsold");
audio1.pause();
audio1.currentTime = 0;
 

  $( "#intro_soldrod" ).fadeOut(1000);
    
 setTimeout(function()
  {

    $("#step3_2").slideDown("slow");

  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_stp3_2');
        x.play();

   },1500);


  setTimeout(function()
  {

    document.getElementById("arowdwn").style.visibility="visible";
    document.getElementById("arowdwn").style.animation="arowdwn_shk 0.5s infinite";
    document.getElementById("tb_sldrod").style.visibility="visible";

   },4000);

}

function ok_sold()

{


  $( "#intro_soldrod" ).fadeOut(1000);
    
 
 setTimeout(function()
  {

    $("#step3_2").slideDown("slow");

  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_stp3_2');
        x.play();

   },1500);


  setTimeout(function()
  {

    document.getElementById("arowdwn").style.visibility="visible";
    document.getElementById("arowdwn").style.animation="arowdwn_shk 0.5s infinite";
    document.getElementById("tb_sldrod").style.visibility="visible";

   },4000);

}


function skp_esc()

{

const audio1 = document.querySelector("#aud_introesc");
audio1.pause();
audio1.currentTime = 0;

   $( "#intro_esc" ).fadeOut(1000);

  setTimeout(function()
  {

  $("#step3_3").slideDown("slow");

  document.getElementById("esc").style.animation="cplate_pop 3s infinite";
  document.getElementById("tb_escdrag").style.visibility="visible";

  },3000);


  setTimeout(function()
  {

    var x= document.getElementById('aud_stp3_3');
        x.play();

   },3500);


  setTimeout(function()
  {

  document.getElementById("tgt_esc2").style.visibility="visible";
  document.getElementById("tgt_esc2").style.height="190px";
  document.getElementById("tgt_esc2").style.width="220px";

  document.getElementById("tb_escdrag").style.visibility="hidden";

  $('#esc2').draggable({
    revert: true,
    droptarget: '#tgt_esc2',
    drop: esc_drop
    });

   },6000);

}

function ok_esc()

{

  $( "#intro_esc" ).fadeOut(1000);

  setTimeout(function()
  {

  $("#step3_3").slideDown("slow");

  document.getElementById("esc").style.animation="cplate_pop 3s infinite";
  document.getElementById("tb_escdrag").style.visibility="visible";

  },3000);


  setTimeout(function()
  {

    var x= document.getElementById('aud_stp3_3');
        x.play();

   },3500);


  setTimeout(function()
  {

  document.getElementById("tgt_esc2").style.visibility="visible";
  document.getElementById("tgt_esc2").style.height="190px";
  document.getElementById("tgt_esc2").style.width="220px";

  document.getElementById("tb_escdrag").style.visibility="hidden";

  $('#esc2').draggable({
    revert: true,
    droptarget: '#tgt_esc2',
    drop: esc_drop
    });

   },6000);

}


// ============================MCQ CANVAS4====================================



function ansshw_c4() {

            if(document.getElementById('optionA').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionA").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("mrk_01").innerHTML=marks;
                document.getElementById("nextButton4").style.visibility="visible";
            }
            else if(document.getElementById('optionB').checked) {
              marks=1;
              document.getElementById("ans_can4").style.color="green";
              document.getElementById("mrk_01").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan4").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk');
              x.play();

              },300);

              document.getElementById("ans_can4").innerHTML = document.getElementById("optionB").value;
              document.getElementById("showans").style.display="none";
              document.getElementById("nextButton4").style.visibility="visible";

              }

            else if(document.getElementById('optionC').checked) {
             
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionC").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else if(document.getElementById('optionD').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionD").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can4").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS4====================================


var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 units';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 mins.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feets';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilograms';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }
}


// =================================CANVAS5=================================


function navNext5()

{
  document.getElementById("canvas4").style.visibility="hidden";
  document.getElementById("canvas5").style.visibility="visible";

  setTimeout(function()
  {

   $("#step5_1").slideDown("slow");
    
  },1000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_1');
        x.play();

   },1500);

  setTimeout(function()
  {

   $( "#tplug_zoom" ).fadeIn(2000);
    
  },5000);


  setTimeout(function()
  {

   document.getElementById("arowdwn5_1").style.visibility="visible";
   document.getElementById("arowdwn5_1").style.animation="arowdwn_shk 0.5s infinite";
   document.getElementById("tb_sldrod5_1").style.visibility="visible";
    
  },7000);

}



function rodmove5_1()

{
  
  document.getElementById("tb_sldrod5_1").style.visibility="hidden";
  document.getElementById("arowdwn5_1").style.visibility="hidden";
  document.getElementById("step5_1").style.visibility="hidden";
  document.getElementById("soldrod_can5").style.visibility="hidden";
  document.getElementById("handrod_wire_can5").style.visibility="visible";
  document.getElementById("handrod_wire_can5").style.animation="sldrodmove_can5 3s forwards";
  document.getElementById("silverhand_can5").style.visibility="visible";
  document.getElementById("silverhand_can5").style.animation="silverhandmove_can5 3s forwards";

  setTimeout(function()
  {

   $( "#soldpoint1_can5" ).fadeIn(1000);

   $( "#smoke1_can5" ).fadeIn(1000);
   $( "#smoke1_can5" ).fadeOut(1800);
   $( "#smoke2_can5" ).fadeIn(1800);
   $( "#smoke2_can5" ).fadeOut(2800);
   $( "#smoke3_can5" ).fadeIn(2800);
   $( "#smoke3_can5" ).fadeOut(2800);

  },3000);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_agn_can5 2s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_agn_can5 2s forwards";

  },5800);

  setTimeout(function()
  {

   $( "#soldpoint2_can5" ).fadeIn(1000);

   $( "#smoke1_2_can5" ).fadeIn(1000);
   $( "#smoke1_2_can5" ).fadeOut(1800);
   $( "#smoke2_2_can5" ).fadeIn(1800);
   $( "#smoke2_2_can5" ).fadeOut(2800);
   $( "#smoke3_2_can5" ).fadeIn(2800);
   $( "#smoke3_2_can5" ).fadeOut(2800);

  },7800);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_bck_can5 2.5s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_bck_can5 2.5s forwards";

  },10500);

  setTimeout(function()
  {

   document.getElementById("silverhand_can5").style.visibility="hidden";
   document.getElementById("handrod_wire_can5").style.visibility="hidden";
   document.getElementById("soldrod_can5").style.visibility="visible";

   $( "#tplug_zoom" ).fadeOut(1500);
   $( "#soldpoint1_can5" ).fadeOut(1500);
   $( "#soldpoint2_can5" ).fadeOut(1500);

   $( "#soldpoint3_can5" ).fadeIn(1500);
   $( "#soldpoint4_can5" ).fadeIn(1500);

  },13200);

  setTimeout(function()
  {

   $("#intro_tplug").slideDown("slow");
    
  },16100);

  setTimeout(function()
  {

    var x= document.getElementById('aud_introplug');
        x.play();

   },16500);

  
  setTimeout(function()
  {
 
    document.getElementById("skpbtn_tplug").style.visibility="hidden";
    document.getElementById("okbtn_tplug").style.visibility="visible";

   },29500);
  
}


function tplug_stop()

{
  
  document.getElementById("tplug").style.visibility="hidden";
  document.getElementById("tplug2").style.visibility="visible";

}

function step5_2hide()

{
  
  document.getElementById("step5_2").style.visibility="hidden";
  
}



function tplug_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tplug").style.visibility="hidden";
  document.getElementById("tgt_tplug").style.height="0px";
  document.getElementById("tgt_tplug").style.width="0px";

  document.getElementById("tplug2").style.top="342px";
  document.getElementById("tplug2").style.left="567px";

  setTimeout(function()
  {

   $( "#tplugzoom2" ).fadeIn(1000);

  },1000);

  setTimeout(function()
  {

   $("#step5_3").slideDown("slow");

  },3000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_3');
        x.play();

   },3500);

  setTimeout(function()
  {

   document.getElementById("arowdwn2_can5").style.visibility="visible";
   document.getElementById("arowdwn2_can5").style.animation="arowdwn_shk 0.5s infinite";
   document.getElementById("tb_sldrod2_can5").style.visibility="visible";

 },9000);

}


function rodmove2_can5()

{
  
  document.getElementById("tb_sldrod2_can5").style.visibility="hidden";
  document.getElementById("arowdwn2_can5").style.visibility="hidden";
  document.getElementById("step5_3").style.visibility="hidden";
  document.getElementById("soldrod_can5").style.visibility="hidden";
  document.getElementById("handrod_wire_can5").style.visibility="visible";
  document.getElementById("handrod_wire_can5").style.animation="sldrodmove2_can5 3s forwards";
  document.getElementById("silverhand_can5").style.visibility="visible";
  document.getElementById("silverhand_can5").style.animation="silverhandmove2_can5 3s forwards";

  setTimeout(function()
  {

   $( "#soldpoint5_can5" ).fadeIn(1000);

   $( "#smoke1_3_can5" ).fadeIn(1000);
   $( "#smoke1_3_can5" ).fadeOut(1800);
   $( "#smoke2_3_can5" ).fadeIn(1800);
   $( "#smoke2_3_can5" ).fadeOut(2800);
   $( "#smoke3_3_can5" ).fadeIn(2800);
   $( "#smoke3_3_can5" ).fadeOut(2800);

  },3000);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_agn2_can5 2s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_agn2_can5 2s forwards";

  },5300);

  setTimeout(function()
  {

   $( "#soldpoint6_can5" ).fadeIn(1000);

   $( "#smoke1_4_can5" ).fadeIn(1000);
   $( "#smoke1_4_can5" ).fadeOut(1800);
   $( "#smoke2_4_can5" ).fadeIn(1800);
   $( "#smoke2_4_can5" ).fadeOut(2800);
   $( "#smoke3_4_can5" ).fadeIn(2800);
   $( "#smoke3_4_can5" ).fadeOut(2800);
  },7600);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_bck2_can5 2.5s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_bck2_can5 2.5s forwards";

  },10000);

  setTimeout(function()
  {

   document.getElementById("silverhand_can5").style.visibility="hidden";
   document.getElementById("handrod_wire_can5").style.visibility="hidden";
   document.getElementById("soldrod_can5").style.visibility="visible";

   $( "#tplugzoom2" ).fadeOut(2000);
   $( "#soldpoint5_can5" ).fadeOut(2000);
   $( "#soldpoint6_can5" ).fadeOut(2000);

   $( "#soldpoint7_can5" ).fadeIn(2000);
   $( "#soldpoint8_can5" ).fadeIn(2000);

  },12500);

  setTimeout(function()
  {

    $("#intro_pmu").slideDown("slow");

  },15000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_intropmu');
        x.play();

   },16000);

  setTimeout(function()
  {

    document.getElementById("skpbtn_pmu").style.visibility="hidden";
    document.getElementById("okbtn_pmu").style.visibility="visible";

   },34000);
    
}

function pmu_stop()

{
  
  document.getElementById("pmu").style.visibility="hidden";
  document.getElementById("pmu2").style.visibility="visible";

}

function step5_4hide()

{
  
  document.getElementById("step5_4").style.visibility="hidden";
  
}

function pmu_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_pmu").style.visibility="hidden";
  document.getElementById("tgt_pmu").style.height="0px";
  document.getElementById("tgt_pmu").style.width="0px";

  document.getElementById("pmu2").style.top="306px";
  document.getElementById("pmu2").style.left="540px";

  setTimeout(function()
  {

   $( "#pmuzoom" ).fadeIn(1000);

  },1000);

  setTimeout(function()
  {

   $("#step5_5").slideDown("slow");

  },3000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_5');
        x.play();

   },3500);

  setTimeout(function()
  {

   document.getElementById("arowdwn2_can5").style.visibility="visible";
   document.getElementById("arowdwn2_can5").style.animation="arowdwn_shk 0.5s infinite";
   document.getElementById("tb_sldrod3_can5").style.visibility="visible";

 },8500);

}

function rodmove3_can5()

{
  
  document.getElementById("tb_sldrod3_can5").style.visibility="hidden";
  document.getElementById("arowdwn2_can5").style.visibility="hidden";
  document.getElementById("step5_5").style.visibility="hidden";
  document.getElementById("soldrod_can5").style.visibility="hidden";
  document.getElementById("handrod_wire_can5").style.visibility="visible";
  document.getElementById("handrod_wire_can5").style.animation="sldrodmove2_can5 3s forwards";
  document.getElementById("silverhand_can5").style.visibility="visible";
  document.getElementById("silverhand_can5").style.animation="silverhandmove2_can5 3s forwards";

  setTimeout(function()
  {

   $( "#soldpoint5_can5" ).fadeIn(1000);

   $( "#smoke1_3_can5" ).fadeIn(1000);
   $( "#smoke1_3_can5" ).fadeOut(1800);
   $( "#smoke2_3_can5" ).fadeIn(1800);
   $( "#smoke2_3_can5" ).fadeOut(2800);
   $( "#smoke3_3_can5" ).fadeIn(2800);
   $( "#smoke3_3_can5" ).fadeOut(2800);

  },3000);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_agn2_can5 2s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_agn2_can5 2s forwards";

  },5300);

  setTimeout(function()
  {

   $( "#soldpoint6_can5" ).fadeIn(1000);

   $( "#smoke1_4_can5" ).fadeIn(1000);
   $( "#smoke1_4_can5" ).fadeOut(1800);
   $( "#smoke2_4_can5" ).fadeIn(1800);
   $( "#smoke2_4_can5" ).fadeOut(2800);
   $( "#smoke3_4_can5" ).fadeIn(2800);
   $( "#smoke3_4_can5" ).fadeOut(2800);
  },7600);

  setTimeout(function()
  {

   document.getElementById("handrod_wire_can5").style.animation="sldrodmove_bck2_can5 2.5s forwards";
   document.getElementById("silverhand_can5").style.animation="silverhandmove_bck2_can5 2.5s forwards";

  },10000);

  setTimeout(function()
  {

   document.getElementById("silverhand_can5").style.visibility="hidden";
   document.getElementById("handrod_wire_can5").style.visibility="hidden";
   document.getElementById("soldrod_can5").style.visibility="visible";

   $( "#pmuzoom" ).fadeOut(2000);
   $( "#soldpoint5_can5" ).fadeOut(2000);
   $( "#soldpoint6_can5" ).fadeOut(2000);

  },12500);

  setTimeout(function()
  {

    document.getElementById("nextButton5").style.visibility="visible";

   },14500);  
     
}


function skp_tplug()

{

const audio1 = document.querySelector("#aud_introplug");
audio1.pause();
audio1.currentTime = 0;


  setTimeout(function()
  {

    $( "#intro_tplug" ).fadeOut(1000);

  },1000);

  setTimeout(function()
  {

    $("#step5_2").slideDown("slow");

    document.getElementById("tplug").style.animation="cplate_pop 3s infinite";
    
  },2000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_2');
        x.play();

   },2500);


  setTimeout(function()
  {

  document.getElementById("tgt_tplug").style.visibility="visible";
  document.getElementById("tgt_tplug").style.height="209px";
  document.getElementById("tgt_tplug").style.width="110px";

  document.getElementById("tb_tplugdrag").style.visibility="hidden";

  $('#tplug2').draggable({
    revert: true,
    droptarget: '#tgt_tplug',
    drop: tplug_drop
    });

   },5500);

}

function ok_tplug()

{


  setTimeout(function()
  {

    $( "#intro_tplug" ).fadeOut(1000);

  },1000);

  setTimeout(function()
  {

    $("#step5_2").slideDown("slow");

    document.getElementById("tplug").style.animation="cplate_pop 3s infinite";
    
  },2000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_2');
        x.play();

   },2500);


  setTimeout(function()
  {

  document.getElementById("tgt_tplug").style.visibility="visible";
  document.getElementById("tgt_tplug").style.height="209px";
  document.getElementById("tgt_tplug").style.width="110px";

  document.getElementById("tb_tplugdrag").style.visibility="hidden";

  $('#tplug2').draggable({
    revert: true,
    droptarget: '#tgt_tplug',
    drop: tplug_drop
    });

   },5500);

}


function skp_pmu()

{

const audio1 = document.querySelector("#aud_intropmu");
audio1.pause();
audio1.currentTime = 0;


setTimeout(function()
  {

    $( "#intro_pmu" ).fadeOut(1000);

  },500);

  setTimeout(function()
  {

    $("#step5_4").slideDown("slow");

    document.getElementById("pmu").style.animation="cplate_pop 3s infinite";

  },1500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_4');
        x.play();

   },2000);

  setTimeout(function()
  {

  document.getElementById("tgt_pmu").style.visibility="visible";
  document.getElementById("tgt_pmu").style.height="209px";
  document.getElementById("tgt_pmu").style.width="110px";

  document.getElementById("tb_pmudrag").style.visibility="hidden";

  $('#pmu2').draggable({
    revert: true,
    droptarget: '#tgt_pmu',
    drop: pmu_drop
    });

   },5000);


}

function ok_pmu()

{

setTimeout(function()
  {

    $( "#intro_pmu" ).fadeOut(1000);

  },500);

  setTimeout(function()
  {

    $("#step5_4").slideDown("slow");

    document.getElementById("pmu").style.animation="cplate_pop 3s infinite";

  },1500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp5_4');
        x.play();

   },2000);

  setTimeout(function()
  {

  document.getElementById("tgt_pmu").style.visibility="visible";
  document.getElementById("tgt_pmu").style.height="209px";
  document.getElementById("tgt_pmu").style.width="110px";

  document.getElementById("tb_pmudrag").style.visibility="hidden";

  $('#pmu2').draggable({
    revert: true,
    droptarget: '#tgt_pmu',
    drop: pmu_drop
    });

   },5000);

}


// ============================ CANVAS5====================================

// ========================================CANVAS6===========================


function navNext6()

{
  document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas6").style.visibility="visible";
  document.getElementById("mrk_01_q2").innerHTML=marks;

}



function ansshw_c6() {

            if(document.getElementById('optionA_q2').checked) {
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionA_q2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                 document.getElementById("mrk_01_q2").innerHTML=marks;
            }
            else if(document.getElementById('optionB_q2').checked) {
              

              document.getElementById("ans_can6").innerHTML = document.getElementById("optionB_q2").value;
              document.getElementById("showans_can6").style.display="none";
              document.getElementById("nextButton6").style.visibility="visible";
               document.getElementById("mrk_01_q2").innerHTML=marks;

              }

            else if(document.getElementById('optionC_q2').checked) {
             
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionC_q2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                 document.getElementById("mrk_01_q2").innerHTML=marks;
            }

            else if(document.getElementById('optionD_q2').checked) {
                marks=marks+1;
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionD_q2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";

                document.getElementById("ans_can6").style.color="green";
                document.getElementById("mrk_01_q2").innerHTML=marks;
                // document.getElementById("mrk_00_q2").style.visibility="hidden";
                document.getElementById("got_mrkcan6").style.visibility="visible";

                setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_c6');
              x.play();

              },300);
            }

            else {
                document.getElementById("ans_can6").innerHTML = "Select Option";
            }
        }
 


  // ========================================CANVAS6===========================


   // ========================================CANVAS7===========================

function navNext7()

{
  document.getElementById("canvas6").style.visibility="hidden";
  document.getElementById("canvas7").style.visibility="visible";

  setTimeout(function()
  {

   $("#intro_dmm").slideDown("slow");
    
  },1000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_introdmm');
        x.play();

   },1500);

  setTimeout(function()
  {

   $( "#meterzoom" ).fadeIn(1000);
   $( "#divbg_white" ).fadeIn(1000);

  },4500);

  setTimeout(function()
  {

    document.getElementById("skpbtn_dmm").style.visibility="hidden";
    document.getElementById("okbtn_dmm").style.visibility="visible";

   },15500);

}


function skp_dmm()

{

const audio1 = document.querySelector("#aud_introdmm");
audio1.pause();
audio1.currentTime = 0;

setTimeout(function()
  {

   $( "#intro_dmm" ).fadeOut(1000);
    
  },1000);

setTimeout(function()
  {

   $("#step7_1").slideDown("slow");
    
  },3000);

setTimeout(function()
  {

    var x= document.getElementById('aud_stp7_1');
        x.play();

   },3500);

  setTimeout(function()
  {

   document.getElementById("arowdwn1_can7").style.visibility="visible";
   document.getElementById("arowdwn1_can7").style.animation="arowdwn_shk2 0.5s infinite";
   document.getElementById("tb_dmmon").style.visibility="visible";
    
  },8300);

}

function ok_dmm()

{


 setTimeout(function()
  {

   $( "#intro_dmm" ).fadeOut(1000);
    
  },1000);

setTimeout(function()
  {

   $("#step7_1").slideDown("slow");
    
  },3000);

setTimeout(function()
  {

    var x= document.getElementById('aud_stp7_1');
        x.play();

   },3500);

  setTimeout(function()
  {

   document.getElementById("arowdwn1_can7").style.visibility="visible";
   document.getElementById("arowdwn1_can7").style.animation="arowdwn_shk2 0.5s infinite";
   document.getElementById("tb_dmmon").style.visibility="visible";
    
  },8300);

}


function skp_ntcon()

{

const audio1 = document.querySelector("#aud_noteconnections");
audio1.pause();
audio1.currentTime = 0;

setTimeout(function()
          {

        $( "#note_connection" ).fadeOut(1000);

          },1000);

        setTimeout(function()
          {

        $("#step7_4").slideDown("slow");
    
          },3000);

        setTimeout(function()
          {

      var x= document.getElementById('aud_stp7_4');
        x.play();

          },3500);

        setTimeout(function()
          {

      document.getElementById("arowdwn3_can7").style.visibility="visible";
      document.getElementById("arowdwn3_can7").style.animation="arowdwn_shk3 0.5s infinite";

      document.getElementById("svg4_can3").style.visibility="visible";
      document.getElementById("path4_can3").style.visibility="visible";
      document.getElementById("handle4_can3").style.visibility="visible";

      document.getElementById("blackpinmm3").style.visibility="hidden";

      document.getElementById("handle4_div_can3").style.visibility="visible";
      document.getElementById("handle4_div_can3").style.height="150px";
      document.getElementById("handle4_div_can3").style.width="115px";

          },8500);

      }



function ok_ntcon()

{

 setTimeout(function()
          {

        $( "#note_connection" ).fadeOut(1000);
    
          },1000);

        setTimeout(function()
          {

        $("#step7_4").slideDown("slow");
    
          },3000);

        setTimeout(function()
          {

      var x= document.getElementById('aud_stp7_4');
        x.play();

          },3500);

        setTimeout(function()
          {

      document.getElementById("arowdwn3_can7").style.visibility="visible";
      document.getElementById("arowdwn3_can7").style.animation="arowdwn_shk3 0.5s infinite";

      document.getElementById("svg4_can3").style.visibility="visible";
      document.getElementById("path4_can3").style.visibility="visible";
      document.getElementById("handle4_can3").style.visibility="visible";

      document.getElementById("blackpinmm3").style.visibility="hidden";

      document.getElementById("handle4_div_can3").style.visibility="visible";
      document.getElementById("handle4_div_can3").style.height="150px";
      document.getElementById("handle4_div_can3").style.width="115px";

          },8500);

}


function skp_gun()

{

const audio1 = document.querySelector("#aud_introglue");
audio1.pause();
audio1.currentTime = 0;

setTimeout(function()
          {

      $( "#intro_gun" ).fadeOut(1000);
    
          },1000);

   setTimeout(function()
          {

     $("#step7_6").slideDown("slow");

     document.getElementById("gluegun").style.animation="cplate_pop 4s infinite";
    
          },3500);

   setTimeout(function()
          {

     var x= document.getElementById('aud_stp7_6');
        x.play();

          },4000);

   setTimeout(function()
          {

     document.getElementById("tgt_gluegun2").style.visibility="visible";
     document.getElementById("tgt_gluegun2").style.height="220px";
     document.getElementById("tgt_gluegun2").style.width="280px";

     document.getElementById("tbgluegun").style.visibility="hidden";

    $('#gluegun2').draggable({
    revert: true,
    droptarget: '#tgt_gluegun2',
    drop: gun_drop
    });
         
       },11000);

      }



function ok_gun()

{

 setTimeout(function()
          {

      $( "#intro_gun" ).fadeOut(1000);
    
          },1000);

   setTimeout(function()
          {

     $("#step7_6").slideDown("slow");

     document.getElementById("gluegun").style.animation="cplate_pop 4s infinite";
    
          },3500);

   setTimeout(function()
          {

     var x= document.getElementById('aud_stp7_6');
        x.play();

          },4000);

   setTimeout(function()
          {

     document.getElementById("tgt_gluegun2").style.visibility="visible";
     document.getElementById("tgt_gluegun2").style.height="220px";
     document.getElementById("tgt_gluegun2").style.width="280px";

     document.getElementById("tbgluegun").style.visibility="hidden";

    $('#gluegun2').draggable({
    revert: true,
    droptarget: '#tgt_gluegun2',
    drop: gun_drop
    });
         
       },11000);
}


// function skp_ntgun()

// {

// const audio1 = document.querySelector("#aud_noteglue");
// audio1.pause();
// audio1.currentTime = 0;

// setTimeout(function()
//           {

//     $( "#note_gun" ).fadeOut(1000); 

//     document.getElementById("gluegun2").style.visibility="hidden";
//     document.getElementById("gluegun3").style.visibility="visible"; 

//           },1000);

//   setTimeout(function()
//           {

//     $("#step7_7").slideDown("slow"); 
    
//           },3000);

//   setTimeout(function()
//           {

//      var x= document.getElementById('aud_stp7_7');
//         x.play();

//           },3500);

//   setTimeout(function()
//           {

//     document.getElementById("arowdwn5_can7").style.visibility="visible";
//     document.getElementById("arowdwn5_can7").style.animation="arowdwn_shk5 0.5s infinite";

//     document.getElementById("tgt_gluegun3").style.visibility="visible";
//     document.getElementById("tgt_gluegun3").style.height="220px";
//     document.getElementById("tgt_gluegun3").style.width="280px";

//     $('#gluegun3').draggable({
//     revert: true,
//     droptarget: '#tgt_gluegun3',
//     drop: gun_drop2
//     });

//           },6500);

//       }



// function ok_ntgun()

// {

// setTimeout(function()
//           {

//     $( "#note_gun" ).fadeOut(1000); 

//     document.getElementById("gluegun2").style.visibility="hidden";
//     document.getElementById("gluegun3").style.visibility="visible"; 

//           },1000);

//   setTimeout(function()
//           {

//     $("#step7_7").slideDown("slow"); 
    
//           },3000);

//   setTimeout(function()
//           {

//      var x= document.getElementById('aud_stp7_7');
//         x.play();

//           },3500);

//   setTimeout(function()
//           {

//     document.getElementById("arowdwn5_can7").style.visibility="visible";
//     document.getElementById("arowdwn5_can7").style.animation="arowdwn_shk5 0.5s infinite";

//     document.getElementById("tgt_gluegun3").style.visibility="visible";
//     document.getElementById("tgt_gluegun3").style.height="220px";
//     document.getElementById("tgt_gluegun3").style.width="280px";

//     $('#gluegun3').draggable({
//     revert: true,
//     droptarget: '#tgt_gluegun3',
//     drop: gun_drop2
//     });

//           },6500);
 
// }


function dmmon()

{
  document.getElementById("arowdwn1_can7").style.visibility="hidden";
  document.getElementById("tb_dmmon").style.visibility="hidden";
  document.getElementById("step7_1").style.visibility="hidden";
  document.getElementById("mmb").style.animation="mmb_on 2s forwards";

  setTimeout(function()
  {

   $( "#red1280" ).fadeIn(500); 
    
  },500);

  setTimeout(function()
  {

   $( "#red1" ).fadeIn(500);
   $( "#red1280" ).fadeOut(500); 
    
  },1500);

  setTimeout(function()
  {

   $("#step7_2").slideDown("slow");
   document.getElementById("redpinmultimeter_blk").style.animation="cplate_pop23 4s infinite";
    
  },2000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp7_2');
        x.play();

   },2500);

  setTimeout(function()
  {

   document.getElementById("tbredpinmultimeter_blk").style.visibility="hidden";
   document.getElementById("handle1_div_can3").style.visibility="visible";
   document.getElementById("handle1_div_can3").style.height="150px";
   document.getElementById("handle1_div_can3").style.width="115px";
    
  },11500);

}

function dmmoff()

{
  document.getElementById("arowdwn1_can7").style.visibility="hidden";
  document.getElementById("tb_dmmoff").style.visibility="hidden";
  document.getElementById("step7_5").style.visibility="hidden";
  document.getElementById("mmb").style.animation="mmb_off 2s forwards";
  $( "#red1" ).fadeOut(1000);

   setTimeout(function()
          {

      $("#intro_gun").slideDown("slow");
    
          },3000);

   setTimeout(function()
        {

    var x= document.getElementById('aud_introglue');
        x.play();

        },3500);

   setTimeout(function()
        {

    document.getElementById("skpbtn_gun").style.visibility="hidden";
    document.getElementById("okbtn_gun").style.visibility="visible";

        },18500);

}

function redpinmultimeter_blkhdn()

{
  document.getElementById("redpinmultimeter_blk").style.visibility="hidden";
  document.getElementById("tbhandle1_can3").style.visibility="hidden";
}

function blackpinmultimeter_blkhdn()

{
  document.getElementById("blackpinmultimeter_blk").style.visibility="hidden";
  document.getElementById("tbhandle2_can3").style.visibility="hidden";
}

function gluegun_hd()

{
  document.getElementById("gluegun").style.visibility="hidden";
  document.getElementById("gluegun2").style.visibility="visible";
}

function gun_drop(event, droptarget)

{
  
  $(this).draggable('destroy');

  document.getElementById("tgt_gluegun2").style.visibility="hidden";
  document.getElementById("tgt_gluegun2").style.height="0px";
  document.getElementById("tgt_gluegun2").style.width="0px";

  document.getElementById("gluegun2").style.top="232px";
  document.getElementById("gluegun2").style.left="-894px";

  $( "#gluepoint1" ).fadeIn(2000);

  setTimeout(function()
          {

    document.getElementById("gluegun2").style.animation="gluegun2_move 1s forwards";
    
          },2000);

  setTimeout(function()
          {

    $( "#gluepoint2" ).fadeIn(2000);  

          },3000);

  setTimeout(function()
          {

    $("#note_gun").slideDown("slow");  

          },6000);

  setTimeout(function()
        {

    var x= document.getElementById('aud_noteglue');
        x.play();

        },6500);

  setTimeout(function()
        {

  document.getElementById("nextButton7").style.visibility="visible";
    
        },11500);

  
}

// function gun_drop2(event, droptarget)

// {
  
//   $(this).draggable('destroy');

//   document.getElementById("tgt_gluegun3").style.visibility="hidden";
//   document.getElementById("tgt_gluegun3").style.height="0px";
//   document.getElementById("tgt_gluegun3").style.width="0px";

//   document.getElementById("gluegun3").style.top="75px";
//   document.getElementById("gluegun3").style.left="-1330px";

//   $( "#meterzoom" ).fadeOut(2000);
//   $( "#gluepoint1" ).fadeOut(2000);
//   $( "#gluepoint2" ).fadeOut(2000);

//   $( "#gluepoint3" ).fadeIn(2000);
//   $( "#gluepoint4" ).fadeIn(2000);

//   setTimeout(function()
//         {

//      document.getElementById("nextButton7").style.visibility="visible";

//         },2000);


// }

function step7_6hide()

{
  document.getElementById("step7_6").style.visibility="hidden";
}

function step7_7hide()

{
  document.getElementById("step7_7").style.visibility="hidden";
  document.getElementById("arowdwn5_can7").style.visibility="hidden";
}

// ===================================wire==============================


var targets5 = $("#handle1_div_can3");
var bezierWeight5 = 0.675;

var handles_can3 = document.querySelectorAll(".handle_can3");
var path_can3 = document.querySelector(".path_can3");

TweenLite.set(handles_can3[0], { x: 405, y: 516 });
TweenLite.set(handles_can3[1], { x: 195, y: 490 });

Draggable.create(handles_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can3[0]._gsTransform.x;
  var y1 = handles_can3[0]._gsTransform.y;
  
  var x4 = handles_can3[1]._gsTransform.x;
  var y4 = handles_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can3.setAttribute("d", data);
   document.getElementById("step7_2").style.visibility="hidden";
   document.getElementById("redwire1_can7").style.visibility="hidden";
   
  for(var i=0; i<targets5.length;i++)

  {
    if (this.hitTest(targets5[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can3").style.visibility="hidden";
document.getElementById("handle1_div_can3").style.height="0px";
document.getElementById("handle1_div_can3").style.width="0px";

document.getElementById("svg_can3").style.visibility="hidden";
document.getElementById("path_can3").style.visibility="hidden";
document.getElementById("handle1_can3").style.visibility="hidden";

document.getElementById("redwire2M_can7").style.visibility="visible";
document.getElementById("redpinmm2").style.visibility="visible";

document.getElementById("svg2_can3").style.visibility="visible";
document.getElementById("path2_can3").style.visibility="visible";
document.getElementById("handle2_can3").style.visibility="visible";
document.getElementById("blackpinmm_dummycan7").style.visibility="hidden";

document.getElementById("handle2_div_can3").style.visibility="visible";
document.getElementById("handle2_div_can3").style.height="150px";
document.getElementById("handle2_div_can3").style.width="115px";

document.getElementById("blackpinmultimeter_blk").style.animation="cplate_pop23 4s infinite";
document.getElementById("tbblackpinmultimeter_blk").style.visibility="hidden";

    }
  }
}
  
});

// =============================================================

var targets6 = $("#handle2_div_can3");
var bezierWeight6 = 0.675;

var handles2_can3 = document.querySelectorAll(".handle2_can3");
var path2_can3 = document.querySelector(".path2_can3");

TweenLite.set(handles2_can3[0], { x: 350, y: 466 });
TweenLite.set(handles2_can3[1], { x: 219, y: 490 });


Draggable.create(handles2_can3, {
  // onDrag: updatePath2

onDrag:function(e) {

  var x1 = handles2_can3[0]._gsTransform.x;
  var y1 = handles2_can3[0]._gsTransform.y;
  
  var x4 = handles2_can3[1]._gsTransform.x;
  var y4 = handles2_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight6;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path2_can3.setAttribute("d", data);
    document.getElementById("blackwire1_can7").style.visibility="hidden";
    
  for(var i=0; i<targets6.length;i++)

  {
    if (this.hitTest(targets6[i],"100%")) 

      { 
        this.vars.onDragEnd=null; 
        this.disable();

        document.getElementById("handle2_div_can3").style.visibility="hidden";
        document.getElementById("handle2_div_can3").style.height="0px";
        document.getElementById("handle2_div_can3").style.width="0px";

        $( "#red325" ).fadeIn(500); 

  setTimeout(function()
        {

   $( "#red005" ).fadeIn(500);
   $( "#red325" ).fadeOut(500); 
    
        },1500);

  setTimeout(function()
        {

   $( "#red001" ).fadeIn(500);
   $( "#red005" ).fadeOut(500); 
    
        },3000);

        document.getElementById("svg2_can3").style.visibility="hidden";
        document.getElementById("path2_can3").style.visibility="hidden";
        document.getElementById("handle2_can3").style.visibility="hidden";

        document.getElementById("blackwire2M_can7").style.visibility="visible";
        document.getElementById("blackpinmm2").style.visibility="visible";        

    setTimeout(function()
  {

   $("#step7_3").slideDown("slow");
    
  },500);

    setTimeout(function()
  {

    var x= document.getElementById('aud_stp7_3');
        x.play();

   },1000);

  setTimeout(function()
  {

   document.getElementById("arowdwn2_can7").style.visibility="visible";
   document.getElementById("arowdwn2_can7").style.animation="arowdwn_shk3 0.5s infinite";

   document.getElementById("svg3_can3").style.visibility="visible";
   document.getElementById("path3_can3").style.visibility="visible";
   document.getElementById("handle3_can3").style.visibility="visible";
   document.getElementById("blackpinmm2").style.visibility="hidden";

   document.getElementById("handle3_div_can3").style.visibility="visible";
   document.getElementById("handle3_div_can3").style.height="150px";
   document.getElementById("handle3_div_can3").style.width="115px";

   },6000);

      }
    }
}

});



// =============================================================

var targets7 = $("#handle3_div_can3");
var bezierWeight6 = 0.675;

var handles3_can3 = document.querySelectorAll(".handle3_can3");
var path3_can3 = document.querySelector(".path3_can3");

TweenLite.set(handles3_can3[0], { x: 806, y: 508 });
TweenLite.set(handles3_can3[1], { x: 218, y: 489 });


Draggable.create(handles3_can3, {
  // onDrag: updatePath2

onDrag:function(e) {

  var x1 = handles3_can3[0]._gsTransform.x;
  var y1 = handles3_can3[0]._gsTransform.y;
  
  var x4 = handles3_can3[1]._gsTransform.x;
  var y4 = handles3_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight6;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path3_can3.setAttribute("d", data);
    document.getElementById("blackwire2M_can7").style.visibility="hidden";
    document.getElementById("arowdwn2_can7").style.visibility="hidden";
    document.getElementById("step7_3").style.visibility="hidden";

    $( "#red1" ).fadeIn(500);
    $( "#red001" ).fadeOut(500); 
    
  for(var i=0; i<targets7.length;i++)

  {
    if (this.hitTest(targets7[i],"100%")) 

      { 
        this.vars.onDragEnd=null; 
        this.disable();

        document.getElementById("handle3_div_can3").style.visibility="hidden";
        document.getElementById("handle3_div_can3").style.height="0px";
        document.getElementById("handle3_div_can3").style.width="0px";

        document.getElementById("svg3_can3").style.visibility="hidden";
        document.getElementById("path3_can3").style.visibility="hidden";
        document.getElementById("handle3_can3").style.visibility="hidden";

        document.getElementById("blackwire3M_can7").style.visibility="visible";
        document.getElementById("blackpinmm3").style.visibility="visible";

        $( "#red546" ).fadeIn(500);
        $( "#red1" ).fadeOut(500); 

        setTimeout(function()
              {

        $( "#red006" ).fadeIn(500);
        $( "#red546" ).fadeOut(500); 
    
              },1500);

        setTimeout(function()
              {

        $( "#red002" ).fadeIn(500);
        $( "#red006" ).fadeOut(500); 
    
              },3000);

        setTimeout(function()
          {

        $("#note_connection").slideDown("slow");
    
          },4500);

        setTimeout(function()
          {

        var x= document.getElementById('aud_noteconnections');
        x.play();

          },5500);

        setTimeout(function()
          {

        document.getElementById("skpbtn_ntcon").style.visibility="hidden";
        document.getElementById("okbtn_ntcon").style.visibility="visible";
    
          },10500);

      }
    }
}

});



// =============================================================

var targets4 = $("#handle4_div_can3");
var bezierWeight6 = 0.675;

var handles4_can3 = document.querySelectorAll(".handle4_can3");
var path4_can3 = document.querySelector(".path4_can3");

TweenLite.set(handles4_can3[0], { x: 807, y: 333 });
TweenLite.set(handles4_can3[1], { x: 218, y: 489 });


Draggable.create(handles4_can3, {
  // onDrag: updatePath2

onDrag:function(e) {

  var x1 = handles4_can3[0]._gsTransform.x;
  var y1 = handles4_can3[0]._gsTransform.y;
  
  var x4 = handles4_can3[1]._gsTransform.x;
  var y4 = handles4_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight6;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path4_can3.setAttribute("d", data);
    document.getElementById("blackwire3M_can7").style.visibility="hidden";
    document.getElementById("arowdwn3_can7").style.visibility="hidden";
    document.getElementById("step7_4").style.visibility="hidden";
    $( "#red1" ).fadeIn(500);
    $( "#red002" ).fadeOut(500); 
    
    $( "#divbg_white" ).fadeOut(9000);
    
  for(var i=0; i<targets4.length;i++)

  {
    if (this.hitTest(targets4[i],"100%")) 

      { 
        this.vars.onDragEnd=null; 
        this.disable();

        document.getElementById("handle4_div_can3").style.visibility="hidden";
        document.getElementById("handle4_div_can3").style.height="0px";
        document.getElementById("handle4_div_can3").style.width="0px";

        document.getElementById("svg4_can3").style.visibility="hidden";
        document.getElementById("path4_can3").style.visibility="hidden";
        document.getElementById("handle4_can3").style.visibility="hidden";

        document.getElementById("blackwire1_can7").style.visibility="visible";
        document.getElementById("blackpinmm_dummycan7").style.visibility="visible";

        document.getElementById("arowdwn4_can7").style.visibility="visible";
        document.getElementById("arowdwn4_can7").style.animation="arowdwn_shk4 0.5s infinite";

        document.getElementById("svg5_can3").style.visibility="visible";
        document.getElementById("path5_can3").style.visibility="visible";
        document.getElementById("handle5_can3").style.visibility="visible";

        document.getElementById("redpinmm2").style.visibility="hidden";

        document.getElementById("handle5_div_can3").style.visibility="visible";
        document.getElementById("handle5_div_can3").style.height="150px";
        document.getElementById("handle5_div_can3").style.width="115px";

        
      }
    }
}

});


// =============================================================

var targets3 = $("#handle5_div_can3");
var bezierWeight6 = 0.675;

var handles5_can3 = document.querySelectorAll(".handle5_can3");
var path5_can3 = document.querySelector(".path5_can3");

TweenLite.set(handles5_can3[0], { x: 725, y: 516 });
TweenLite.set(handles5_can3[1], { x: 191, y: 491 });


Draggable.create(handles5_can3, {
  // onDrag: updatePath2

onDrag:function(e) {

  var x1 = handles5_can3[0]._gsTransform.x;
  var y1 = handles5_can3[0]._gsTransform.y;
  
  var x4 = handles5_can3[1]._gsTransform.x;
  var y4 = handles5_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight6;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path5_can3.setAttribute("d", data);
    document.getElementById("redwire2M_can7").style.visibility="hidden";
    document.getElementById("arowdwn4_can7").style.visibility="hidden";
        
  for(var i=0; i<targets3.length;i++)

  {
    if (this.hitTest(targets3[i],"100%")) 

      { 
        this.vars.onDragEnd=null; 
        this.disable();

        document.getElementById("handle5_div_can3").style.visibility="hidden";
        document.getElementById("handle5_div_can3").style.height="0px";
        document.getElementById("handle5_div_can3").style.width="0px";

        document.getElementById("svg5_can3").style.visibility="hidden";
        document.getElementById("path5_can3").style.visibility="hidden";
        document.getElementById("handle5_can3").style.visibility="hidden";

        document.getElementById("redwire1_can7").style.visibility="visible";
        document.getElementById("redpinmm_dummycan7").style.visibility="visible";

        setTimeout(function()
          {

        $("#step7_5").slideDown("slow");
    
          },1000);

        setTimeout(function()
          {

      var x= document.getElementById('aud_stp7_5');
        x.play();

          },1500);

        setTimeout(function()
          {

   document.getElementById("arowdwn1_can7").style.visibility="visible";
   document.getElementById("arowdwn1_can7").style.animation="arowdwn_shk2 0.5s infinite";
   document.getElementById("tb_dmmoff").style.visibility="visible";
    
          },6300);
       
      }
    }
}

});


// ========================wire======================================



// ========================================CANVAS8===========================


function navNext8()

{
  document.getElementById("canvas7").style.visibility="hidden";
  document.getElementById("canvas8").style.visibility="visible";
  document.getElementById("mrk_01_q3").innerHTML=marks;

}



function ansshw_c8() {

            if(document.getElementById('optionA_q3').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionA_q3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                 document.getElementById("mrk_01_q3").innerHTML=marks;
            }
            else if(document.getElementById('optionB_q3').checked) {
              

              document.getElementById("ans_can8").innerHTML = document.getElementById("optionB_q3").value;
              document.getElementById("showans_can8").style.display="none";
              document.getElementById("nextButton8").style.visibility="visible";
               document.getElementById("mrk_01_q3").innerHTML=marks;

              }

            else if(document.getElementById('optionC_q3').checked) {
             
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionC_q3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                 document.getElementById("mrk_01_q3").innerHTML=marks;
            }

            else if(document.getElementById('optionD_q3').checked) {
                marks=marks+1;
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionD_q3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";

                document.getElementById("ans_can8").style.color="green";
                document.getElementById("mrk_01_q3").innerHTML=marks;
                document.getElementById("got_mrkcan8").style.visibility="visible";

                setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_c8');
              x.play();

              },300);
            }

            else {
                document.getElementById("ans_can8").innerHTML = "Select Option";
            }
        }
 


  // ========================================CANVAS8===========================



// ========================================CANVAS9===========================


function navNext9()

{
  document.getElementById("canvas8").style.visibility="hidden";
  document.getElementById("canvas9").style.visibility="visible";

  setTimeout(function()
          {

        $("#intro_arm").slideDown("slow");
    
          },1500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_introarm');
        x.play();

   },2000);

  setTimeout(function()
          {

  document.getElementById("skpbtn_arm").style.visibility="hidden";
  document.getElementById("okbtn_arm").style.visibility="visible";
    
          },15000);

}


function arm_hd()

{
    document.getElementById("arm").style.visibility="hidden";
    document.getElementById("arm2").style.visibility="visible";
}

function stp8_1hd()

{
    document.getElementById("step8_1").style.visibility="hidden";
}

function motor_hd()

{
    document.getElementById("motor").style.visibility="hidden";
    document.getElementById("motor2").style.visibility="visible";
}

function stp8_2hd()

{
    document.getElementById("step8_2").style.visibility="hidden";
}


function arm_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_arm").style.visibility="hidden";
  document.getElementById("tgt_arm").style.height="0px";
  document.getElementById("tgt_arm").style.width="0px";

  document.getElementById("arm2").style.height="380px";
  document.getElementById("arm2").style.top="160px";
  document.getElementById("arm2").style.left="455px";

  setTimeout(function()
          {

        $("#intro_motor").slideDown("slow");
    
          },1000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_intromotor');
        x.play();

   },1500);

  setTimeout(function()
          {

    document.getElementById("skpbtn_motor").style.visibility="hidden";
    document.getElementById("okbtn_motor").style.visibility="visible";
    
          },17000);
}


function motor_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_motor").style.visibility="hidden";
  document.getElementById("tgt_motor").style.height="0px";
  document.getElementById("tgt_motor").style.width="0px";

  document.getElementById("motor2").style.height="230px";
  document.getElementById("motor2").style.top="162px";
  document.getElementById("motor2").style.left="460px";

  setTimeout(function()
          {

        $("#step8_3").slideDown("slow");
    
          },1000);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp8_3');
        x.play();

   },1500);

  setTimeout(function()
          {

        document.getElementById("arowdwn8_1").style.visibility="visible";
        document.getElementById("tb_armflip").style.visibility="visible";

        document.getElementById("arowdwn8_1").style.animation="arowdwn8_1shk 0.5s infinite";
    
          },2500);
}

function arm_flip()

{
    document.getElementById("tb_armflip").style.visibility="hidden";
    document.getElementById("arowdwn8_1").style.visibility="hidden";
    document.getElementById("step8_3").style.visibility="hidden";
    document.getElementById("redarmback_mo").style.visibility="visible";

    setTimeout(function()
          {

    $( "#zoomarm_bck" ).fadeIn(2000);

          },1500);

    setTimeout(function()
          {

    $("#step8_4").slideDown("slow");
    document.getElementById("nut6").style.animation="cplate_pop2 4s infinite";

          },4500);

    setTimeout(function()
        {

    var x= document.getElementById('aud_stp8_4');
        x.play();

        },5000);

    setTimeout(function()
          {

       document.getElementById("tb_nut6").style.visibility="hidden";

       document.getElementById("tgt_nut6").style.visibility="visible";
       document.getElementById("tgt_nut6").style.height="70px";
       document.getElementById("tgt_nut6").style.width="70px";

       $('#nut6_2').draggable({
        revert: true,
        droptarget: '#tgt_nut6',
        drop: nut6_2_drop
        });
    
          },9000);
}


function nut6_hd()

{
    document.getElementById("nut6").style.visibility="hidden";
    document.getElementById("nut6_2").style.visibility="visible";
}

function stp8_4hd()

{
    document.getElementById("step8_4").style.visibility="hidden";
}


function nut6_2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut6").style.visibility="hidden";
  document.getElementById("tgt_nut6").style.height="0px";
  document.getElementById("tgt_nut6").style.width="0px";

  document.getElementById("nut6_2f").style.visibility="visible";
  document.getElementById("nut6_2").style.visibility="hidden";
  document.getElementById("nut8").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut8").style.visibility="hidden";

       document.getElementById("tgt_nut8").style.visibility="visible";
       document.getElementById("tgt_nut8").style.height="70px";
       document.getElementById("tgt_nut8").style.width="70px";

       $('#nut8_2').draggable({
        revert: true,
        droptarget: '#tgt_nut8',
        drop: nut8_2_drop
        });
    
          },2000);

}

function nut8_hd()

{
    document.getElementById("nut8").style.visibility="hidden";
    document.getElementById("nut8_2").style.visibility="visible";
}

function nut8_2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut8").style.visibility="hidden";
  document.getElementById("tgt_nut8").style.height="0px";
  document.getElementById("tgt_nut8").style.width="0px";

  document.getElementById("nut8_2f").style.visibility="visible";
  document.getElementById("nut8_2").style.visibility="hidden";
  document.getElementById("nut2").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut2").style.visibility="hidden";

       document.getElementById("tgt_nut2").style.visibility="visible";
       document.getElementById("tgt_nut2").style.height="70px";
       document.getElementById("tgt_nut2").style.width="70px";

       $('#nut2_2').draggable({
        revert: true,
        droptarget: '#tgt_nut2',
        drop: nut2_2_drop
        });
    
          },2000);

}

function nut2_hd()

{
    document.getElementById("nut2").style.visibility="hidden";
    document.getElementById("nut2_2").style.visibility="visible";
}


function nut2_2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut2").style.visibility="hidden";
  document.getElementById("tgt_nut2").style.height="0px";
  document.getElementById("tgt_nut2").style.width="0px";

  document.getElementById("nut2_2f").style.visibility="visible";
  document.getElementById("nut2_2").style.visibility="hidden";
  document.getElementById("nut4").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut4").style.visibility="hidden";

       document.getElementById("tgt_nut4").style.visibility="visible";
       document.getElementById("tgt_nut4").style.height="70px";
       document.getElementById("tgt_nut4").style.width="70px";

       $('#nut4_2').draggable({
        revert: true,
        droptarget: '#tgt_nut4',
        drop: nut4_2_drop
        });
    
          },2000);

}

function nut4_hd()

{
    document.getElementById("nut4").style.visibility="hidden";
    document.getElementById("nut4_2").style.visibility="visible";
}

function nut4_2_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_nut4").style.visibility="hidden";
  document.getElementById("tgt_nut4").style.height="0px";
  document.getElementById("tgt_nut4").style.width="0px";

  document.getElementById("nut4_2f").style.visibility="visible";
  document.getElementById("nut4_2").style.visibility="hidden";

  setTimeout(function()
          {

       $("#intro_lnkey").slideDown("slow");
    
          },1500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_introlnkey');
        x.play();

        },2000);

  setTimeout(function()
        {

    document.getElementById("skpbtn_lnkey").style.visibility="hidden";
    document.getElementById("okbtn_lnkey").style.visibility="visible";

        },12000);

}

function lnkey_hd()

{
    document.getElementById("lnkey").style.visibility="hidden";
    document.getElementById("lnkey2").style.visibility="visible";
}

function stp8_5hd()

{
    document.getElementById("step8_5").style.visibility="hidden";
}


function lnkey_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_lnkey").style.visibility="hidden";
  document.getElementById("tgt_lnkey").style.height="0px";
  document.getElementById("tgt_lnkey").style.width="0px";

  document.getElementById("lnkeyhand").style.visibility="visible";
  document.getElementById("lnkey2").style.visibility="hidden";

  document.getElementById("lnkeyhand").style.animation="lnkeyhand_rotate 2s forwards";

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_move1 0.5s forwards";
    
          },2000); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_rotate2 2s forwards";
    
          },2500);

  setTimeout(function()
          {
       document.getElementById("lnkeyhand").style.animation="lnkeyhand_move2 0.5s forwards";
        
          },4500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_rotate3 2s forwards";
    
          },5000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_move3 0.5s forwards";
    
          },7000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_rotate4 2s forwards";
    
          },7500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_bck 1s forwards";
    
          },9500); 

  setTimeout(function()
          {

        document.getElementById("lnkeyhand").style.visibility="hidden";
        document.getElementById("lnkey3").style.visibility="visible"; 

          },10500);


  setTimeout(function()
          {

    $( "#zoomarm_bck" ).fadeOut(1000);
    $( "#nut6_2f" ).fadeOut(1000);
    $( "#nut8_2f" ).fadeOut(1000);
    $( "#nut2_2f" ).fadeOut(1000);
    $( "#nut4_2f" ).fadeOut(1000);

    $( "#nut6_2f2" ).fadeIn(1000);
    $( "#nut8_2f2" ).fadeIn(1000);
    $( "#nut2_2f2" ).fadeIn(1000);
    $( "#nut4_2f2" ).fadeIn(1000);

          },11500); 

  setTimeout(function()
          {

       $("#note_arm").slideDown("slow");
    
          },13500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_notearm');
        x.play();

        },14000);

  setTimeout(function()
          {

       document.getElementById("nextButton9").style.visibility="visible";
    
          },18000);

}

function skp_arm()

{

const audio1 = document.querySelector("#aud_introarm");
audio1.pause();
audio1.currentTime = 0;


  setTimeout(function()
          {

        $( "#intro_arm" ).fadeOut(1000);
    
          },1000);

  setTimeout(function()
          {

        $("#step8_1").slideDown("slow");
        document.getElementById("arm").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp8_1');
        x.play();

   },3000);

  setTimeout(function()
          {

       document.getElementById("tb_arm").style.visibility="hidden";

       document.getElementById("tgt_arm").style.visibility="visible";
       document.getElementById("tgt_arm").style.height="375px";
       document.getElementById("tgt_arm").style.width="190px";

       $('#arm2').draggable({
        revert: true,
        droptarget: '#tgt_arm',
        drop: arm_drop
        });
    
          },6000);

}

function ok_arm()

{


  setTimeout(function()
          {

        $( "#intro_arm" ).fadeOut(1000);
    
          },1000);

  setTimeout(function()
          {

        $("#step8_1").slideDown("slow");
        document.getElementById("arm").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
  {

    var x= document.getElementById('aud_stp8_1');
        x.play();

   },3000);

  setTimeout(function()
          {

       document.getElementById("tb_arm").style.visibility="hidden";

       document.getElementById("tgt_arm").style.visibility="visible";
       document.getElementById("tgt_arm").style.height="375px";
       document.getElementById("tgt_arm").style.width="190px";

       $('#arm2').draggable({
        revert: true,
        droptarget: '#tgt_arm',
        drop: arm_drop
        });
    
          },6000);

}

function skp_motor()

{

const audio1 = document.querySelector("#aud_intromotor");
audio1.pause();
audio1.currentTime = 0;


 setTimeout(function()
          {

        $( "#intro_motor" ).fadeOut(1000);
    
          },1000);

  setTimeout(function()
          {

        $("#step8_2").slideDown("slow");
        document.getElementById("motor").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp8_2');
        x.play();

        },3000);

  setTimeout(function()
          {

       document.getElementById("tb_motor").style.visibility="hidden";

       document.getElementById("tgt_motor").style.visibility="visible";
       document.getElementById("tgt_motor").style.height="190px";
       document.getElementById("tgt_motor").style.width="190px";

       $('#motor2').draggable({
        revert: true,
        droptarget: '#tgt_motor',
        drop: motor_drop
        });
    
          },5000);

}

function ok_motor()

{

setTimeout(function()
          {

        $( "#intro_motor" ).fadeOut(1000);
    
          },1000);

  setTimeout(function()
          {

        $("#step8_2").slideDown("slow");
        document.getElementById("motor").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp8_2');
        x.play();

        },3000);

  setTimeout(function()
          {

       document.getElementById("tb_motor").style.visibility="hidden";

       document.getElementById("tgt_motor").style.visibility="visible";
       document.getElementById("tgt_motor").style.height="190px";
       document.getElementById("tgt_motor").style.width="190px";

       $('#motor2').draggable({
        revert: true,
        droptarget: '#tgt_motor',
        drop: motor_drop
        });
    
          },5000);

}


function skp_lnkey()

{

const audio1 = document.querySelector("#aud_introlnkey");
audio1.pause();
audio1.currentTime = 0;

setTimeout(function()
          {

    $( "#intro_lnkey" ).fadeOut(1000);

          },1000);

  setTimeout(function()
          {

       $("#step8_5").slideDown("slow");
       document.getElementById("lnkey").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp8_5');
        x.play();

        },3000);

  setTimeout(function()
          {

       document.getElementById("tb_lnkey").style.visibility="hidden";

       document.getElementById("tgt_lnkey").style.visibility="visible";
       document.getElementById("tgt_lnkey").style.height="90px";
       document.getElementById("tgt_lnkey").style.width="175px";

       $('#lnkey2').draggable({
        revert: true,
        droptarget: '#tgt_lnkey',
        drop: lnkey_drop
        });
    
     },8000);

}

function ok_lnkey()

{

setTimeout(function()
          {

    $( "#intro_lnkey" ).fadeOut(1000);

          },1000);

  setTimeout(function()
          {

       $("#step8_5").slideDown("slow");
       document.getElementById("lnkey").style.animation="cplate_pop 4s infinite";
    
          },2500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp8_5');
        x.play();

        },3000);

  setTimeout(function()
          {

       document.getElementById("tb_lnkey").style.visibility="hidden";

       document.getElementById("tgt_lnkey").style.visibility="visible";
       document.getElementById("tgt_lnkey").style.height="90px";
       document.getElementById("tgt_lnkey").style.width="175px";

       $('#lnkey2').draggable({
        revert: true,
        droptarget: '#tgt_lnkey',
        drop: lnkey_drop
        });
    
     },8000);

}


// ========================================CANVAS9===========================


// ========================================CANVAS10===========================


function navNext10()

{
  document.getElementById("canvas9").style.visibility="hidden";
  document.getElementById("canvas10").style.visibility="visible";
  document.getElementById("mrk_01_q4").innerHTML=marks;

}



function ansshw_c10() {

            if(document.getElementById('optionA_q4').checked) {

              marks=marks+1;
                document.getElementById("ans_can10").innerHTML = document.getElementById("optionD_q4").value;
                document.getElementById("showans_can10").style.display="none";
                document.getElementById("nextButton10").style.visibility="visible";

                document.getElementById("ans_can10").style.color="green";
                document.getElementById("mrk_01_q4").innerHTML=marks;
                document.getElementById("got_mrkcan10").style.visibility="visible";

                setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_c10');
              x.play();

              },300);
                
            }
            else if(document.getElementById('optionB_q4').checked) {
              

              document.getElementById("ans_can10").innerHTML = document.getElementById("optionB_q4").value;
              document.getElementById("showans_can10").style.display="none";
              document.getElementById("nextButton10").style.visibility="visible";
               document.getElementById("mrk_01_q4").innerHTML=marks;

              }

            else if(document.getElementById('optionC_q4').checked) {

             document.getElementById("ans_can10").innerHTML = document.getElementById("optionA_q4").value;
             document.getElementById("showans_can10").style.display="none";
             document.getElementById("nextButton10").style.visibility="visible";
             document.getElementById("mrk_01_q4").innerHTML=marks;
                
            }

            else if(document.getElementById('optionD_q4').checked) {

              document.getElementById("ans_can10").innerHTML = document.getElementById("optionC_q4").value;
              document.getElementById("showans_can10").style.display="none";
              document.getElementById("nextButton10").style.visibility="visible";
              document.getElementById("mrk_01_q4").innerHTML=marks;
                
            }

            else {
                document.getElementById("ans_can10").innerHTML = "Select Option";
            }
        }
 


  // ========================================CANVAS10===========================


// ========================================CANVAS11===========================


function navNext11()

{
  document.getElementById("canvas10").style.visibility="hidden";
  document.getElementById("canvas11").style.visibility="visible";

  setTimeout(function()
          {

       $("#step11_0").slideDown("slow");
    
          },1000);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_0');
        x.play();

        },1500);

  setTimeout(function()
          {

       document.getElementById("tb_plateflip").style.visibility="visible";
       document.getElementById("arowdwn_can8").style.visibility="visible";
       document.getElementById("arowdwn_can8").style.animation="arowdwn_can8shk 0.5s infinite"; 
    
          },4000);

}

function whitearmback1_hd()

{
    document.getElementById("whitearmback1").style.visibility="hidden";
    document.getElementById("whitearmback1_2").style.visibility="visible";
}

function stp11_1hd()

{
    document.getElementById("step11_1").style.visibility="hidden";
}

function whitearmback1_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_whitearmback1").style.visibility="hidden";
  document.getElementById("tgt_whitearmback1").style.height="0px";
  document.getElementById("tgt_whitearmback1").style.width="0px";

  document.getElementById("whitearmback1_2").style.left="203px";
  document.getElementById("whitearmback1_2").style.top="7px";
  document.getElementById("whitearmback1_2").style.transform="rotate(-45deg)";

  document.getElementById("whitearmback2").style.animation="cplate_pop 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_whitearmback2").style.visibility="hidden";

       document.getElementById("tgt_whitearmback2").style.visibility="visible";
       document.getElementById("tgt_whitearmback2").style.height="320px";
       document.getElementById("tgt_whitearmback2").style.width="175px";

       $('#whitearmback2_2').draggable({
        revert: true,
        droptarget: '#tgt_whitearmback2',
        drop: whitearmback2_drop
        });
    
     },1000);

}

function whitearmback2_hd()

{
    document.getElementById("whitearmback2").style.visibility="hidden";
    document.getElementById("whitearmback2_2").style.visibility="visible";
}

function whitearmback2_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_whitearmback2").style.visibility="hidden";
  document.getElementById("tgt_whitearmback2").style.height="0px";
  document.getElementById("tgt_whitearmback2").style.width="0px";

  document.getElementById("whitearmback2_2").style.left="481px";
  document.getElementById("whitearmback2_2").style.top="14px";
  document.getElementById("whitearmback2_2").style.transform="rotate(45deg)";

  document.getElementById("redarmback1").style.animation="cplate_pop 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_redarmback1").style.visibility="hidden";

       document.getElementById("tgt_redarmback1").style.visibility="visible";
       document.getElementById("tgt_redarmback1").style.height="320px";
       document.getElementById("tgt_redarmback1").style.width="175px";

       $('#redarmback1_2').draggable({
        revert: true,
        droptarget: '#tgt_redarmback1',
        drop: redarmback1_drop
        });
    
     },1000);

}

function redarmback1_hd()

{
    document.getElementById("redarmback1").style.visibility="hidden";
    document.getElementById("redarmback1_2").style.visibility="visible";
}

function redarmback1_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_redarmback1").style.visibility="hidden";
  document.getElementById("tgt_redarmback1").style.height="0px";
  document.getElementById("tgt_redarmback1").style.width="0px";

  document.getElementById("redarmback1_2").style.left="193px";
  document.getElementById("redarmback1_2").style.top="286px";
  document.getElementById("redarmback1_2").style.transform="rotate(45deg)";

  document.getElementById("redarmback2").style.animation="cplate_pop 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_redarmback2").style.visibility="hidden";

       document.getElementById("tgt_redarmback2").style.visibility="visible";
       document.getElementById("tgt_redarmback2").style.height="320px";
       document.getElementById("tgt_redarmback2").style.width="175px";

       $('#redarmback2_2').draggable({
        revert: true,
        droptarget: '#tgt_redarmback2',
        drop: redarmback2_drop
        });
    
     },1000);

}

function redarmback2_hd()

{
    document.getElementById("redarmback2").style.visibility="hidden";
    document.getElementById("redarmback2_2").style.visibility="visible";
}


function nut11_8_hd()

{
    document.getElementById("nut11_8").style.visibility="hidden";
    document.getElementById("nut11_82").style.visibility="visible";
}


function stp11_2hd()

{
    document.getElementById("step11_2").style.visibility="hidden";
   
}

function redarmback2_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_redarmback2").style.visibility="hidden";
  document.getElementById("tgt_redarmback2").style.height="0px";
  document.getElementById("tgt_redarmback2").style.width="0px";

  document.getElementById("redarmback2_2").style.left="473px";
  document.getElementById("redarmback2_2").style.top="292px";
  document.getElementById("redarmback2_2").style.transform="rotate(-45deg)";

  setTimeout(function()
  {

   $( "#zoomscrew" ).fadeIn(2000);

  },1000);

  setTimeout(function()
  {

   $("#step11_2").slideDown("slow");
   document.getElementById("nut11_8").style.animation="cplate_pop2 4s infinite";

  },3000);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_2');
        x.play();

        },3500);

  setTimeout(function()
          {

       document.getElementById("tb_nut11_8").style.visibility="hidden";

       document.getElementById("tgt_nut11_8").style.visibility="visible";
       document.getElementById("tgt_nut11_8").style.height="80px";
       document.getElementById("tgt_nut11_8").style.width="80px";

       $('#nut11_82').draggable({
        revert: true,
        droptarget: '#tgt_nut11_8',
        drop: nut11_8_drop
        });
    
          },8500);


}


function nut11_8_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_8").style.visibility="hidden";
  document.getElementById("tgt_nut11_8").style.height="0px";
  document.getElementById("tgt_nut11_8").style.width="0px";

  document.getElementById("nut11_8f").style.visibility="visible";
  document.getElementById("nut11_82").style.visibility="hidden";
  document.getElementById("nut11_7").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_7").style.visibility="hidden";

       document.getElementById("tgt_nut11_7").style.visibility="visible";
       document.getElementById("tgt_nut11_7").style.height="80px";
       document.getElementById("tgt_nut11_7").style.width="80px";

       $('#nut11_72').draggable({
        revert: true,
        droptarget: '#tgt_nut11_7',
        drop: nut11_7_drop
        });
    
          },1000);

}


function nut11_7_hd()

{
    document.getElementById("nut11_7").style.visibility="hidden";
    document.getElementById("nut11_72").style.visibility="visible";
}

function nut11_7_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_7").style.visibility="hidden";
  document.getElementById("tgt_nut11_7").style.height="0px";
  document.getElementById("tgt_nut11_7").style.width="0px";

  document.getElementById("nut11_7f").style.visibility="visible";
  document.getElementById("nut11_72").style.visibility="hidden";
  document.getElementById("nut11_6").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_6").style.visibility="hidden";

       document.getElementById("tgt_nut11_6").style.visibility="visible";
       document.getElementById("tgt_nut11_6").style.height="80px";
       document.getElementById("tgt_nut11_6").style.width="80px";

       $('#nut11_62').draggable({
        revert: true,
        droptarget: '#tgt_nut11_6',
        drop: nut11_6_drop
        });
    
          },1000);

}

function nut11_6_hd()

{
    document.getElementById("nut11_6").style.visibility="hidden";
    document.getElementById("nut11_62").style.visibility="visible";
}

function nut11_6_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_6").style.visibility="hidden";
  document.getElementById("tgt_nut11_6").style.height="0px";
  document.getElementById("tgt_nut11_6").style.width="0px";

  document.getElementById("nut11_6f").style.visibility="visible";
  document.getElementById("nut11_62").style.visibility="hidden";
  document.getElementById("nut11_5").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_5").style.visibility="hidden";

       document.getElementById("tgt_nut11_5").style.visibility="visible";
       document.getElementById("tgt_nut11_5").style.height="80px";
       document.getElementById("tgt_nut11_5").style.width="80px";

       $('#nut11_52').draggable({
        revert: true,
        droptarget: '#tgt_nut11_5',
        drop: nut11_5_drop
        });
    
          },1000);

}

function nut11_5_hd()

{
    document.getElementById("nut11_5").style.visibility="hidden";
    document.getElementById("nut11_52").style.visibility="visible";
}

function nut11_5_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_5").style.visibility="hidden";
  document.getElementById("tgt_nut11_5").style.height="0px";
  document.getElementById("tgt_nut11_5").style.width="0px";

  document.getElementById("nut11_5f").style.visibility="visible";
  document.getElementById("nut11_52").style.visibility="hidden";
  document.getElementById("nut11_4").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_4").style.visibility="hidden";

       document.getElementById("tgt_nut11_4").style.visibility="visible";
       document.getElementById("tgt_nut11_4").style.height="80px";
       document.getElementById("tgt_nut11_4").style.width="80px";

       $('#nut11_42').draggable({
        revert: true,
        droptarget: '#tgt_nut11_4',
        drop: nut11_4_drop
        });
    
          },1000);

}

function nut11_4_hd()

{
    document.getElementById("nut11_4").style.visibility="hidden";
    document.getElementById("nut11_42").style.visibility="visible";
}

function nut11_4_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_4").style.visibility="hidden";
  document.getElementById("tgt_nut11_4").style.height="0px";
  document.getElementById("tgt_nut11_4").style.width="0px";

  document.getElementById("nut11_4f").style.visibility="visible";
  document.getElementById("nut11_42").style.visibility="hidden";
  document.getElementById("nut11_3").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_3").style.visibility="hidden";

       document.getElementById("tgt_nut11_3").style.visibility="visible";
       document.getElementById("tgt_nut11_3").style.height="80px";
       document.getElementById("tgt_nut11_3").style.width="80px";

       $('#nut11_32').draggable({
        revert: true,
        droptarget: '#tgt_nut11_3',
        drop: nut11_3_drop
        });
    
          },1000);

}

function nut11_3_hd()

{
    document.getElementById("nut11_3").style.visibility="hidden";
    document.getElementById("nut11_32").style.visibility="visible";
}

function nut11_3_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_3").style.visibility="hidden";
  document.getElementById("tgt_nut11_3").style.height="0px";
  document.getElementById("tgt_nut11_3").style.width="0px";

  document.getElementById("nut11_3f").style.visibility="visible";
  document.getElementById("nut11_32").style.visibility="hidden";
  document.getElementById("nut11_2").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_2").style.visibility="hidden";

       document.getElementById("tgt_nut11_2").style.visibility="visible";
       document.getElementById("tgt_nut11_2").style.height="80px";
       document.getElementById("tgt_nut11_2").style.width="80px";

       $('#nut11_22').draggable({
        revert: true,
        droptarget: '#tgt_nut11_2',
        drop: nut11_2_drop
        });
    
          },1000);
}

function nut11_2_hd()

{
    document.getElementById("nut11_2").style.visibility="hidden";
    document.getElementById("nut11_22").style.visibility="visible";
}

function nut11_2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_2").style.visibility="hidden";
  document.getElementById("tgt_nut11_2").style.height="0px";
  document.getElementById("tgt_nut11_2").style.width="0px";

  document.getElementById("nut11_2f").style.visibility="visible";
  document.getElementById("nut11_22").style.visibility="hidden";
  document.getElementById("nut11_1").style.animation="cplate_pop2 4s infinite";

  setTimeout(function()
          {

       document.getElementById("tb_nut11_1").style.visibility="hidden";

       document.getElementById("tgt_nut11_1").style.visibility="visible";
       document.getElementById("tgt_nut11_1").style.height="80px";
       document.getElementById("tgt_nut11_1").style.width="80px";

       $('#nut11_12').draggable({
        revert: true,
        droptarget: '#tgt_nut11_1',
        drop: nut11_1_drop
        });
    
          },1000);
}


function nut11_1_hd()

{
    document.getElementById("nut11_1").style.visibility="hidden";
    document.getElementById("nut11_12").style.visibility="visible";
}

function nut11_1_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut11_1").style.visibility="hidden";
  document.getElementById("tgt_nut11_1").style.height="0px";
  document.getElementById("tgt_nut11_1").style.width="0px";

  document.getElementById("nut11_1f").style.visibility="visible";
  document.getElementById("nut11_12").style.visibility="hidden";

  setTimeout(function()
  {

   $("#step11_3").slideDown("slow");
   document.getElementById("lnkey11_1").style.animation="cplate_pop 4s infinite";

  },1000);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_3');
        x.play();

        },1500);

  setTimeout(function()
          {

       document.getElementById("tb_lnkey11_1").style.visibility="hidden";

       document.getElementById("tgt_lnkey11_1").style.visibility="visible";
       document.getElementById("tgt_lnkey11_1").style.height="95px";
       document.getElementById("tgt_lnkey11_1").style.width="200px";

       $('#lnkey11_2').draggable({
        revert: true,
        droptarget: '#tgt_lnkey11_1',
        drop: lnkey11_2_drop
        });
    
          },5500);
}


function lnkey11_1_hd()

{
    document.getElementById("lnkey11_1").style.visibility="hidden";
    document.getElementById("lnkey11_2").style.visibility="visible";
}

function stp11_3hd()

{
    document.getElementById("step11_3").style.visibility="hidden";
}


function plateflip()

{
    
    document.getElementById("tb_plateflip").style.visibility="hidden";
    document.getElementById("arowdwn_can8").style.visibility="hidden";
    document.getElementById("step11_0").style.visibility="hidden";
    document.getElementById("cplatewidglue").style.animation="cplatewidglue_flip 1s forwards";

    setTimeout(function()
          {

       document.getElementById("cplatewidglue").style.visibility="hidden";
       document.getElementById("cplate_flip").style.visibility="visible"; 
       document.getElementById("cplate_flip").style.animation="cplate_flip 1s forwards";
    
          },1000);

    setTimeout(function()
          {

       $("#step11_1").slideDown("slow");
       document.getElementById("whitearmback1").style.animation="cplate_pop 4s infinite";
    
          },3500);

    setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_1');
        x.play();

        },4000);

  setTimeout(function()
          {

       document.getElementById("tb_whitearmback1").style.visibility="hidden";

       document.getElementById("tgt_whitearmback1").style.visibility="visible";
       document.getElementById("tgt_whitearmback1").style.height="320px";
       document.getElementById("tgt_whitearmback1").style.width="175px";

       $('#whitearmback1_2').draggable({
        revert: true,
        droptarget: '#tgt_whitearmback1',
        drop: whitearmback1_drop
        });
    
     },10000);
  
}

function lnkey11_2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_lnkey11_1").style.visibility="hidden";
  document.getElementById("tgt_lnkey11_1").style.height="0px";
  document.getElementById("tgt_lnkey11_1").style.width="0px";

  document.getElementById("lnkey11_2").style.visibility="hidden";
  document.getElementById("lnkeyhand11").style.visibility="visible";
  document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_1 2s forwards";

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_1 0.5s forwards";
    
          },2000); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_2 2s forwards";
    
          },2500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_2 0.5s forwards";
    
          },4500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_3 2s forwards";
    
          },5000); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_3 0.5s forwards";
    
          },7000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_4 2s forwards";
    
          },7500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_4 0.5s forwards";
    
          },9500); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_5 2s forwards";
    
          },10000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_5 0.5s forwards";
    
          },12000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_6 2s forwards";
    
          },12500); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_6 0.5s forwards";
    
          },14500);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_7 2s forwards";
    
          },15000); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_move11_7 0.5s forwards";
    
          },17000);

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand_rotate11_8 2s forwards";
    
          },17500); 

  setTimeout(function()
          {

       document.getElementById("lnkeyhand11").style.animation="lnkeyhand11_bck 2s forwards";
    
          },19500);

  setTimeout(function()
          {

      document.getElementById("lnkeyhand11").style.visibility="hidden";
      document.getElementById("lnkey11_2shw").style.visibility="visible"; 

          },21500);

  setTimeout(function()
          {

      $( "#zoomscrew" ).fadeOut(2000);

      $( "#nut11_1f" ).fadeOut(2000);
      $( "#nut11_2f" ).fadeOut(2000);
      $( "#nut11_3f" ).fadeOut(2000);
      $( "#nut11_4f" ).fadeOut(2000);
      $( "#nut11_5f" ).fadeOut(2000);
      $( "#nut11_6f" ).fadeOut(2000);
      $( "#nut11_7f" ).fadeOut(2000);
      $( "#nut11_8f" ).fadeOut(2000);

      $( "#nutf11_1shw" ).fadeIn(2000);
      $( "#nutf11_2shw" ).fadeIn(2000);
      $( "#nutf11_3shw" ).fadeIn(2000);
      $( "#nutf11_4shw" ).fadeIn(2000);
      $( "#nutf11_5shw" ).fadeIn(2000);
      $( "#nutf11_6shw" ).fadeIn(2000);
      $( "#nutf11_7shw" ).fadeIn(2000);
      $( "#nutf11_8shw" ).fadeIn(2000); 

          },22000); 

  setTimeout(function()
          {

      $("#step11_4").slideDown("slow"); 

          },24500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_4');
        x.play();

        },25000);

  setTimeout(function()
          {

      document.getElementById("tb_armzoom").style.visibility="visible"; 
      document.getElementById("arowdwn_can11").style.visibility="visible";
      document.getElementById("arowdwn_can11").style.animation="arowdwn_canshk 0.5s infinite";
      
          },27000);

}


function armzoom()

{
    document.getElementById("tb_armzoom").style.visibility="hidden";
    document.getElementById("arowdwn_can11").style.visibility="hidden";
    document.getElementById("step11_4").style.visibility="hidden";
    $( "#zoomescwires" ).fadeIn(1000);
    $( "#zoomescwires2" ).fadeIn(1000);
    setTimeout(function()
          {
    document.getElementById("svg_can11").style.visibility="visible";
    document.getElementById("handle1_can11").style.visibility="visible";
    document.getElementById("tb_handle1_can11").style.visibility="visible";
    document.getElementById("tb_handle2_can11").style.visibility="visible";
    document.getElementById("tb_handle3_can11").style.visibility="visible";  
    document.getElementById("path_can11").style.visibility="visible";
    document.getElementById("yellowwire1_can11").style.visibility="visible";
    document.getElementById("blackwire1_can11").style.visibility="visible";
    document.getElementById("redwire1_can11").style.visibility="visible";
    document.getElementById("handle2_can11").style.visibility="visible"; 
    document.getElementById("handle3_can11").style.visibility="visible"; 
     
    
          },100);

    setTimeout(function()
        {

    $("#step11_5").slideDown("slow");

        },1000);

    setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_5');
        x.play();

        },1500);

    setTimeout(function()
          {

     document.getElementById("arowdwn2_can11").style.visibility="visible"; 
     document.getElementById("arowdwn2_can11").style.animation="arowdwn_can11shk2 0.5s infinite";

     document.getElementById("arowdwn3_can11").style.visibility="visible"; 

     document.getElementById("handle1_div_can11").style.visibility="visible";
     document.getElementById("handle1_div_can11").style.height="70px";
     document.getElementById("handle1_div_can11").style.width="55px";

     document.getElementById("tb_handle1_can11").style.visibility="hidden";

          },5500);

}


// ===================================wire==============================


var targets11_1 = $("#handle1_div_can11");
var bezierWeight5 = 0.675;

var handles_can11 = document.querySelectorAll(".handle_can11");
var path_can11 = document.querySelector(".path_can11");

TweenLite.set(handles_can11[1], { x: 636, y: 52 });
TweenLite.set(handles_can11[0], { x: 634, y: 117 });

Draggable.create(handles_can11, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can11[1]._gsTransform.x;
  var y1 = handles_can11[1]._gsTransform.y;
  
  var x4 = handles_can11[0]._gsTransform.x;
  var y4 = handles_can11[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can11.setAttribute("d", data);
   document.getElementById("arowdwn2_can11").style.visibility="hidden";
   document.getElementById("yellowwire1_can11").style.visibility="hidden";
   document.getElementById("step11_5").style.visibility="hidden";
   
  for(var i=0; i<targets11_1.length;i++)

  {
    if (this.hitTest(targets11_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can11").style.visibility="hidden";
document.getElementById("handle1_div_can11").style.height="0px";
document.getElementById("handle1_div_can11").style.width="0px";

document.getElementById("svg_can11").style.visibility="hidden";
document.getElementById("path_can11").style.visibility="hidden";
document.getElementById("handle1_can11").style.visibility="hidden";
document.getElementById("arowdwn3_can11").style.visibility="hidden";

document.getElementById("socket1_can11").style.visibility="visible";
document.getElementById("yellowwire2_can11").style.visibility="visible";

document.getElementById("svg2_can11").style.visibility="visible";
document.getElementById("path2_can11").style.visibility="visible";

$("#step11_6").slideDown("slow");

setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_6');
        x.play();

        },500); 

setTimeout(function()
          {

     document.getElementById("arowdwn4_can11").style.visibility="visible"; 
     document.getElementById("arowdwn4_can11").style.animation="arowdwn_can11shk4 0.5s infinite";

     document.getElementById("arowdwn5_can11").style.visibility="visible";

     document.getElementById("handle2_div_can11").style.visibility="visible";
     document.getElementById("handle2_div_can11").style.height="70px";
     document.getElementById("handle2_div_can11").style.width="55px";

     document.getElementById("tb_handle2_can11").style.visibility="hidden"; 

          },4500);

    }
  }
}
  
});


var targets11_2 = $("#handle2_div_can11");
var bezierWeight5 = 0.675;

var handles2_can11 = document.querySelectorAll(".handle2_can11");
var path2_can11 = document.querySelector(".path2_can11");

TweenLite.set(handles2_can11[1], { x: 654, y: 52 });
TweenLite.set(handles2_can11[0], { x: 655, y: 110 });

Draggable.create(handles2_can11, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles2_can11[1]._gsTransform.x;
  var y1 = handles2_can11[1]._gsTransform.y;
  
  var x4 = handles2_can11[0]._gsTransform.x;
  var y4 = handles2_can11[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path2_can11.setAttribute("d", data);
   document.getElementById("arowdwn4_can11").style.visibility="hidden";
   document.getElementById("blackwire1_can11").style.visibility="hidden";
   document.getElementById("step11_6").style.visibility="hidden";
   
  for(var i=0; i<targets11_2.length;i++)

  {
    if (this.hitTest(targets11_2[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle2_div_can11").style.visibility="hidden";
document.getElementById("handle2_div_can11").style.height="0px";
document.getElementById("handle2_div_can11").style.width="0px";

document.getElementById("svg2_can11").style.visibility="hidden";
document.getElementById("path2_can11").style.visibility="hidden";
document.getElementById("handle2_can11").style.visibility="hidden";
document.getElementById("arowdwn5_can11").style.visibility="hidden";

document.getElementById("socket2_can11").style.visibility="visible";
document.getElementById("blackwire2_can11").style.visibility="visible";

document.getElementById("svg3_can11").style.visibility="visible";
document.getElementById("path3_can11").style.visibility="visible";

$("#step11_7").slideDown("slow");

setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_7');
        x.play();

        },500);

setTimeout(function()
          {

     document.getElementById("arowdwn6_can11").style.visibility="visible"; 
     document.getElementById("arowdwn6_can11").style.animation="arowdwn_can11shk6 0.5s infinite";

     document.getElementById("arowdwn7_can11").style.visibility="visible";

     document.getElementById("handle3_div_can11").style.visibility="visible";
     document.getElementById("handle3_div_can11").style.height="70px";
     document.getElementById("handle3_div_can11").style.width="55px";

     document.getElementById("tb_handle3_can11").style.visibility="hidden"; 

          },4500); 

    }
  }
}
  
});


var targets11_3 = $("#handle3_div_can11");
var bezierWeight5 = 0.675;

var handles3_can11 = document.querySelectorAll(".handle3_can11");
var path3_can11 = document.querySelector(".path3_can11");

TweenLite.set(handles3_can11[1], { x: 661, y: 41 });
TweenLite.set(handles3_can11[0], { x: 674, y: 144 });

Draggable.create(handles3_can11, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles3_can11[1]._gsTransform.x;
  var y1 = handles3_can11[1]._gsTransform.y;
  
  var x4 = handles3_can11[0]._gsTransform.x;
  var y4 = handles3_can11[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path3_can11.setAttribute("d", data);
   document.getElementById("arowdwn6_can11").style.visibility="hidden";
   document.getElementById("redwire1_can11").style.visibility="hidden";
   document.getElementById("step11_7").style.visibility="hidden";
   
  for(var i=0; i<targets11_3.length;i++)

  {
    if (this.hitTest(targets11_3[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle3_div_can11").style.visibility="hidden";
document.getElementById("handle3_div_can11").style.height="0px";
document.getElementById("handle3_div_can11").style.width="0px";

document.getElementById("svg3_can11").style.visibility="hidden";
document.getElementById("path3_can11").style.visibility="hidden";
document.getElementById("handle3_can11").style.visibility="hidden";
document.getElementById("arowdwn7_can11").style.visibility="hidden";

document.getElementById("socket3_can11").style.visibility="visible";
document.getElementById("redwire2_can11").style.visibility="visible";

setTimeout(function()
          {

  $( "#zoomescwires" ).fadeOut(1000);
  $( "#zoomescwires2" ).fadeOut(1000);
  $( "#socket1_can11" ).fadeOut(1000);
  $( "#socket2_can11" ).fadeOut(1000);
  $( "#socket3_can11" ).fadeOut(1000); 
  $( "#yellowwire2_can11" ).fadeOut(1000);
  $( "#redwire2_can11" ).fadeOut(1000);
  $( "#blackwire2_can11" ).fadeOut(1000); 

  $( "#cplate_flip" ).fadeOut(1000);
  $( "#wire1arm" ).fadeIn(1000);  

          },1500); 

setTimeout(function()
          {

            $("#step11_8").slideDown("slow");
            document.getElementById("tie1_can11").style.animation="cplate_pop 4s infinite";

           },1500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_stp11_8');
        x.play();

        },2000); 

setTimeout(function()
          {

            document.getElementById("tb_tie1_can11").style.visibility="hidden";

            document.getElementById("tgt_tie1_can11").style.visibility="visible";
            document.getElementById("tgt_tie1_can11").style.height="60px";
            document.getElementById("tgt_tie1_can11").style.width="170px";
          
            $('#tie1_2can11').draggable({
            revert: true,
            droptarget: '#tgt_tie1_can11',
            drop: tie1_2can11_drop
            });

           },5000); 

    }
  }
}
  
});

function tie1_can11_hd()
{
    document.getElementById("tie1_can11").style.visibility="hidden";
    document.getElementById("tie1_2can11").style.visibility="visible";
}

function stp11_8hd()
{
    document.getElementById("step11_8").style.visibility="hidden";
}


function tie1_2can11_drop(event, droptarget)

{

  $(this).draggable('destroy');

  document.getElementById("tgt_tie1_can11").style.visibility="hidden";
  document.getElementById("tgt_tie1_can11").style.height="0px";
  document.getElementById("tgt_tie1_can11").style.width="0px";

  document.getElementById("tie1_2can11").style.visibility="hidden";
  document.getElementById("tie_tied").style.visibility="visible";

  setTimeout(function()
          {

            $("#note_tie").slideDown("slow");

           },500);

  setTimeout(function()
        {

    var x= document.getElementById('aud_note_tie');
        x.play();

        },1000); 

  setTimeout(function()
          {

            document.getElementById("nextButton11").style.visibility="visible";

           },5000); 

}
// ========================================CANVAS11===========================




function navNext12()

{
  document.getElementById("canvas11").style.visibility="hidden";
  document.getElementById("canvas12").style.visibility="visible";
  document.getElementById("totalmarks").innerHTML=marks;

}
// ========================CANVAS12======================================

// function navNext12()

// {
//   document.getElementById("canvas11").style.visibility="hidden";
//   document.getElementById("canvas12").style.visibility="visible";
//   document.getElementById("mrk_01_q5").innerHTML=marks;

// }


// function ansshw_c12() {

//             if(document.getElementById('optionA_q5').checked) {
//                 document.getElementById("ans_can12").innerHTML = document.getElementById("optionA_q5").value;
//                 document.getElementById("showans_can12").style.display="none";
//                 // document.getElementById("nextButton12").style.visibility="visible";
//                  document.getElementById("mrk_01_q5").innerHTML=marks;
//             }
//             else if(document.getElementById('optionB_q5').checked) {
              

//               document.getElementById("ans_can12").innerHTML = document.getElementById("optionB_q5").value;
//               document.getElementById("showans_can12").style.display="none";
//               // document.getElementById("nextButton12").style.visibility="visible";
//                document.getElementById("mrk_01_q5").innerHTML=marks;

//               }

//             else if(document.getElementById('optionD_q5').checked) {
             
//                 document.getElementById("ans_can12").innerHTML = document.getElementById("optionC_q5").value;
//                 document.getElementById("showans_can12").style.display="none";
//                 // document.getElementById("nextButton12").style.visibility="visible";
//                  document.getElementById("mrk_01_q5").innerHTML=marks;
//             }

//             else if(document.getElementById('optionC_q5').checked) {
//                 marks=marks+1;
//                 document.getElementById("ans_can12").innerHTML = document.getElementById("optionD_q5").value;
//                 document.getElementById("showans_can12").style.display="none";
//                 // document.getElementById("nextButton12").style.visibility="visible";

//                 document.getElementById("ans_can12").style.color="green";
//                 document.getElementById("mrk_01_q5").innerHTML=marks;
//                 document.getElementById("got_mrkcan12").style.visibility="visible";

//                 setTimeout(function()
//               {

//               var x= document.getElementById('aud_congo1mrk_c12');
//               x.play();

//               },300);
//             }

//             else {
//                 document.getElementById("ans_can12").innerHTML = "Select Option";
//             }
//         }


// ===========================CANVAS12=====================================
function reset()
{
    location.reload();
}
