See https://www.codewars.com/kata/554c8a93e466e794fe000001

### Description

Task
Your task is to determine the relationship between the given point and the vector. Direction of the vector is important! To determine if the point is to the left or to the right, you should imagine yourself standing at the beginning of the vector and looking at the end of the vector.

Arguments
You are given coordinates of a point and coordinates of a vector on 2D plane:

point = [x, y]

vector = [[x, y], [x, y]] (two points, direction is from first to second)

Vectors always have non-zero length, so you don't have to check for that at this point.

Return
Your function must return:

-1 if the point is to the left of the vector,

0 if the point is on the same line as vector,

1 if the point is to the right of the vector.

Do not repeat yourself!
You can consider re-using solution of this kata in some of the next Geometry katas:

Geometry A-1.1: Similar kata with precision handling and a check for zero vectors
- http://www.codewars.com/kata/geometry-a-1-dot-1-modify-point-location-detector-to-handle-zero-length-vectors-and-precision-errors-dry


Geometry A-3: Checking if point belongs to the vector
- http://www.codewars.com/kata/geometry-a-3-does-point-belong-to-the-vector-dry


Geometry B-1: Is point inside or outside a triangle?
- http://www.codewars.com/kata/geometry-b-1-point-in-a-triangle