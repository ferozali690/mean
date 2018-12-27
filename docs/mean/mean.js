let list = [10, 12, 32, 37, 40, 41];

/**
* returns a number that is the mean of given list.
*
* @param {*} list
* @returns number
*/
let getMean = list => ((list.reduce((total, num) => total + num)) / list.length).toFixed(2);

/**
* returns a nuber that is the variance of all the data points in array.
*
* @param {*} list
* @param {*} mean
* @returns
*/
let getVariance = (list, mean) => {
  let pointSubMean = [];
  let squreEach = [];
  list.forEach(number => pointSubMean.push(Number(Math.abs(number - mean).toFixed(2))));
  pointSubMean.forEach(number => squreEach.push(Number((Math.pow(number, 2)).toFixed(2))));
  let sumOfSqrts = squreEach.reduce((total, num) => total + num);
  let sampleVariance = sumOfSqrts / (list.length);
  return sampleVariance;
};

let mean = getMean(list);

let variance = getVariance(list, mean);

document.write('mean : ', mean + "<br>");
document.write('variance : ', variance);