$(document).ready(function () {
     $('.btnClear').on('click',()=>{
          $('.outer').text("");
          $('.output').text("0");
     });
     $('.btn0').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn0').text()));
     });
     $('.btn1').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn1').text()));
     });
     $('.btn2').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn2').text()));
     });
     $('.btn3').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn3').text()));
     });
     $('.btn4').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn4').text()));
     });
     $('.btn5').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn5').text()));
     });
     $('.btn6').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn6').text()));
     });
     $('.btn7').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn7').text()));
     });
     $('.btn8').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn8').text()));
     });
     $('.btn9').on('click',()=>{
          $('.outer').text($('.outer').text() + Number($('.btn9').text()));
     });
     $('.btnSum').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnSum').text()));
     });
     $('.btnLess').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnLess').text()));
     });
     $('.btnPercent').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnPercent').text()));
     });
     $('.btnSlash').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnSlash').text()));
     });
     $('.btnDoc').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnDoc').text()));
     });
     $('.btnMod').on('click',()=>{
          if($('.outer').text() > 0){
               $('.outer').text(-Number($('.outer').text()));
          }else if($('.outer').text() == ""){
               $('.outer').text("NaN");
          }else{
               $('.outer').text(+Number($('.outer').text()));
          }
     });
     $('.btnAnd').on('click',()=>{
          $('.outer').text($('.outer').text() + ($('.btnAnd').text()));
     });
     $('.btnEqual').on('click',()=>{
          $('.output').text(eval($('.outer').text()));
     });

});


