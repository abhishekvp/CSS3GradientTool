
$(function () {
    var dragging = false,
        target_axis,
        o_x, o_y, h_x, h_y, last_angle;
    $('.holder').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; 
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        target_axis = $(e.target).closest('.draggable_axis');
        if (!target_axis.data("origin")) target_axis.data("origin", {
            left: target_axis.offset().left,
            top: target_axis.offset().top
        });
        o_x = target_axis.data("origin").left;
        o_y = target_axis.data("origin").top; 
        
        last_angle = target_axis.data("last_angle") || 0;
    })

    $(document).mousemove(function (e) {
        if (dragging) {
			mouseFlag = 0;
			
            var s_x = e.pageX,
                s_y = e.pageY; 
            if (s_x !== o_x && s_y !== o_y) { 
                var s_rad = Math.atan2(s_y - o_y, s_x - o_x); 
                s_rad -= Math.atan2(h_y - o_y, h_x - o_x); 
                s_rad += last_angle; 
				console.log(last_angle);
                var degree = (s_rad * (360 / (2 * Math.PI)));
		
                target_axis.css('-moz-transform', 'rotate(' + degree + 'deg)');
                target_axis.css('-moz-transform-origin', '50% 50%');
                target_axis.css('-webkit-transform', 'rotate(' + degree + 'deg)');
                target_axis.css('-webkit-transform-origin', '50% 50%');
                target_axis.css('-o-transform', 'rotate(' + degree + 'deg)');
                target_axis.css('-o-transform-origin', '50% 50%');
                target_axis.css('-ms-transform', 'rotate(' + degree + 'deg)');
                target_axis.css('-ms-transform-origin', '50% 50%');
            }
        }
    }) 
    
    $(document).mouseup(function (e) {
		if(mouseFlag == 0){
        dragging = false
        var s_x = e.pageX,
            s_y = e.pageY;
        
        
        var s_rad = Math.atan2(s_y - o_y, s_x - o_x); 
        s_rad -= Math.atan2(h_y - o_y, h_x - o_x); 
        s_rad += last_angle;
		gAngle = limitAngle((s_rad*(180/(Math.PI)))+90);
		console.log("Angle="+gAngle)
		updateGrad();
        target_axis.data("last_angle", s_rad);
		mouseFlag = 1;
		}
		else {
		if(gFlag==1){
		target_axis.data("last_angle", 0);
		gFlag = 0;
		}
		}
    })
})

function limitAngle(angle)
{
while (angle >= 360)
angle = angle - 360;	
while (angle < 0)
angle = angle + 360;
return angle;
}








