
function findContours() {
  var src = cv.matFromArray(getInput(), cv.CV_8UC4);
  cv.cvtColor(src, src, cv.ColorConversionCodes.COLOR_RGBA2RGB.value, 0);

  var canny_output = new cv.Mat();
  var blurred = new cv.Mat();
  var cthresh = Control.canny_threshold;
  cv.blur(src, blurred, [5, 5], [-1, -1], cv.BORDER_DEFAULT);

  cv.Canny(blurred, canny_output, cthresh, cthresh*2, 3, 0);

  /// Find contours
  var contours = new cv.MatVector();
  var hierarchy = new cv.Mat();
  cv.findContours(canny_output, contours, hierarchy, 3, 2, [0, 0]);

  // Convex hull
  var hull = new cv.MatVector();
  for( i = 0; i < contours.size(); i++ )
  {
    var item = new cv.Mat();
    cv.convexHull(contours.get(i), item, false, true);
    hull.push_back(item);
    item.delete();
  }

  // Draw contours + hull results
  var size = canny_output.size();
  var drawing = cv.Mat.zeros(size.get(0), size.get(1), cv.CV_8UC4);
  for(i = 0; i< contours.size(); i++ )
  {
    var color = new cv.Scalar(Math.random()*255, Math.random()*255, Math.random()*255);
    cv.drawContours(drawing, contours, i, color, 2, 8, hierarchy, 0, [0, 0]);
    var green = new cv.Scalar(30, 150, 30);
    cv.drawContours(drawing, hull, i, green, 1, 8, new cv.Mat(), 0, [0, 0]);
    color.delete();
    green.delete();
  }

  show_image(drawing, "canvas2");
  src.delete();
  blurred.delete();
  drawing.delete();
  hull.delete();
  contours.delete();
  hierarchy.delete();
  canny_output.delete();
}
debugger;
findContours();