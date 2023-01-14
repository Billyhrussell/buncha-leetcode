/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let arr = [ax1, ay1, ax2, ay2, bx1, by1, bx2, by2];

  let xAxisA = 0;
  let xAxisB = 0;
  let yAxisA = 0;
  let yAxisB = 0;

  function total(t1, t2) {
    return Math.abs(t1) + Math.abs(t2);
  }

  function tNeg(t1, t2){
    return t1 - t2;
  }

  //check if all positive, if yes, then subtract
  if (ax1 > 0 && ax2 > 0) {
    xAxisA = tNeg(ax1, ax2) ;
  }
  //check if both negative, if yes, then subtract
  else if (ax1 < 0 && ax2 < 0) {
    xAxisA = tNeg(ax1, ax2);
  }
  //check if neg and pos, then add
  else {
    xAxisA = total(ax1, ax2)
  }

  //check if all positive, if yes, then subtract
  if (bx1 > 0 && bx2 > 0) {
    xAxisB = bx1 - bx2;
  }
  //check if both negative, if yes, then subtract
  else if (bx1 < 0 && bx2 < 0) {
    xAxisB = bx1 - bx2;
  }
  //check if neg and pos, then add
  else {
    xAxisB = total(bx1, bx2);
  }

  if(ay1 > 0 && ay2 > 0){
    yAxisA = tNeg(ay1, ay2);
  }else if(ay1 < 0 && ay2 < 0){
    yAxisA = tNeg(ay1, ay2);
  }else{
    yAxisA = total(ay1, ay2);
  }

  if(by1 > 0 && by2 > 0){
    yAxisB = tNeg(by1, by2);
  }else if(by1 < 0 && by2 < 0){
    yAxisB = tNeg(by1, by2);
  }else{
    yAxisB = total(by1, by2);
  }



  let a = xAxisA * yAxisA;
  let b = xAxisB * yAxisB;

  // check if exactly matching
  if (ax1 === bx1 && ay1 === by1 && ax2 === bx2 && ay2 === by2) {
    let ans = Math.abs(a);
    return ans;
  }

  // let full = (a - b) * 2;
  // let fullAns = (a + b) - Math.abs(full);


  if (a === 0) {
    return Math.abs(b);
  } else if (b === 0) {
    return Math.abs(a);
  }

  function range(start, stop, step) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}

  let aRange = range(ax1, ax2);
  let bRange = range(bx1, bx2);
  let yARange = range(ay1, ay2);
  let yBRange = range(by1, by2);

  let aInBx = false;
  let bInAx = false;
  let aInBy = false;
  let bInAy = false;


  let sum = 0;
  //if one encapuslates the other
  for(let aR of aRange){


    if(bRange.includes(aR)){
      sum++;
    }
    if(sum === aRange.length){
      aInBx = true;
    }

  }

  sum = 0;
  for(let bR of bRange){
    if(aRange.includes(bR)){
      sum++;
    }
    if(sum === bRange.length){
      bInAx = true;
    }

  }

  sum = 0;
  for(let aY of yARange){

    if(yBRange.includes(aY)){
      sum++;
    }
    if(sum === yARange.length){
      aInBy = true;
    }
  }

  sum = 0;
  for(let bY of yBRange){

    if(yARange.includes(bY)){
      sum++;
    }
    if(sum === yBRange.length){
      bInAy = true;
    }
  }

  debugger;

  if((aInBy && aInBx) || (bInAy && bInAx)){
    debugger;
    if(a > b){
      return a;
    }else{
      return b;
    }
  }


  //if they touch but don't intersect
  if(((ax1 === bx1) && (ay1 === by1)) || ((ax1 === bx2) && (ay1 === by2)) ||
    ((ax2 === bx1) && (ay2 === by1))|| ((ax2 === bx2) && (ay2 === by2))){
      return Math.abs(a) + Math.abs(b);
    }

  if((ax1 === bx1 || ax1 === bx2) || (ax2 === bx1 || ax2 === bx2)){
    return Math.abs(a) + Math.abs(b);
  }

  debugger;

  //if they intersect a little
  for(let aR of aRange){
    debugger;
    if(bRange.includes(aR)){
      let full = (a - b) * 2;
      debugger;
      return (a + b) - Math.abs(full);
    }
  }

  debugger;
  //if they dont intersect
  return Math.abs(a) + Math.abs(b);

};

// console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4));
// console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
// console.log(computeArea(-2, -2, 2, 2, -1, -1, 1, 1));
// console.log(computeArea(-2, -2, 2, 2, -3, -3, -2, -2));
// console.log(computeArea(-2, -2, 2, 2, 2, -3, 3, -2));
console.log(computeArea(-2, -2, 2, 2, 1, -3, 3, -1));






// /**
//  * @param {number} ax1
//  * @param {number} ay1
//  * @param {number} ax2
//  * @param {number} ay2
//  * @param {number} bx1
//  * @param {number} by1
//  * @param {number} bx2
//  * @param {number} by2
//  * @return {number}
//  */
//  var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

//   let ax = Math.abs(ax1) + Math.abs(ax2);

//   function total(t1, t2){
//       return Math.abs(t1) + Math.abs(t2);
//   }

//   let a = total(ax1, ax2) * total(ay1, ay2);
//   let b = total(bx1, bx2) * total(by1, by2);

//      // check if exactly matching
//   if(ax1 === bx1 && ay1 === by1 && ax2 === bx2 && ay2 === by2){
//       let ans = Math.abs(a);
//       return ans;
//   }

//   breakpoint();

//   if(a === 0){
//       return Math.abs(b);
//   }else if(b === 0){
//       return Math.abs(a);
//   }

//   let full = (a - b) * 2;

//   return (a + b) - Math.abs(full);

// };