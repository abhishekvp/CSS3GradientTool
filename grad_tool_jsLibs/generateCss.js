var gAngle   = 90, gDist1   = 30, gDist2   = 70, gCol1="#FF0000", gCol2="#FFAC1C", gFlag = 0, mouseFlag = 0;

function init()
{
updateGrad();
}

function updateColorDistance(cur_id,cur_dist)
{
mouseFlag = 1;
if(cur_id=="col1R")
gDist1 = cur_dist;
else
gDist2 = cur_dist;
updateGrad();
}

function updateColor(cur_id, cur_col)
{
mouseFlag = 1;
gFlag = 1;
console.log("id="+cur_id+"   col="+cur_col);
if(cur_id=="col1")
gCol1 = "#"+cur_col;
else
gCol2 = "#"+cur_col;
gAngle = 90;
$(".draggable_axis").css('-moz-transform', 'rotate(0deg)');
$(".draggable_axis").css('-moz-transform-origin', '50% 50%');
$(".draggable_axis").css('-webkit-transform', 'rotate(0deg)');
$(".draggable_axis").css('-webkit-transform-origin', '50% 50%');
$(".draggable_axis").css('-o-transform', 'rotate(0deg)');
$(".draggable_axis").css('-o-transform-origin', '50% 50%');
$(".draggable_axis").css('-ms-transform', 'rotate(0deg)');
$(".draggable_axis").css('-ms-transform-origin', '50% 50%');
updateGrad();
}
	
function updateGrad()
{
	if(gAngle){
	var gradVal = calcGrad(gAngle, gDist1, gCol1, gDist2, gCol2);
    $("#appStyle").html(' .appStyle { '+gradVal.replace('\n', '')+' }');     
	$("#css").val(gradVal);
	}
}

function calcGrad(angle, dist1, col1, dist2, col2)
{
	var angle = Math.round(angle);
  var d1 = Math.round(dist1);
  var d2 = Math.round(dist2);

  var css = 'background: '+col1+';\n'
          + 'background: -moz-linear-gradient('+angle+'deg, '+col1+' '+d1+'%, '+col2+' '+d2+'%);\n'
          + 'background: -webkit-linear-gradient('+angle+'deg, '+col1+' '+d1+'%, '+col2+' '+d2+'%);\n'
          + 'background: -o-linear-gradient('+angle+'deg, '+col1+' '+d1+'%, '+col2+' '+d2+'%);\n'
          + 'background: -ms-linear-gradient('+angle+'deg, '+col1+' '+d1+'%, '+col2+' '+d2+'%);\n'
          + 'background: linear-gradient('+angle+'deg, '+col1+' '+d1+'%, '+col2+' '+d2+'%);\n';
  return css;

}