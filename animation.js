
function onKeyDown(event) {
 // console.log(event);
 var randompoint1 = new Point(view.size.width, view.size.height) * Point.random();
 var path1 = new Path.Circle(randompoint1,100);

 path1.fillColor = 'blue';

}
