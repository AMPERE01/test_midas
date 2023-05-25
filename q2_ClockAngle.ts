
function getClockAngle(hh_mm: string): number {

     // 1 minute = 6 degree  === A circle has 360 degrees, and it is divided into 60 minutes (360 / 60) = 6 degrees per minute.
     // 1 hour = 30 degree === A circle has 360 degrees, and it is divided into 12 hours (360 / 12) = 30 degrees per hour.
 
     const [hours,minutes]= hh_mm.split(":").map(Number);
     if (hours > 12){
          hours-12
     }else{
          hours
     }
     const _hour = (hours + (minutes / 60)) * 30;
     const _minute = minutes * 6
 
     //Angles in a circle are not negative.
     var _angle = Math.abs(_hour - _minute);

     //The problem states that we want the shorter angle.
     if(_angle > 180){
       _angle = 360 - _angle
     }else{
       _angle
     }
   return _angle;
 }
 
 console.log(getClockAngle("17:30"))