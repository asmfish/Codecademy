const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {//should have been <=1
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
    console.log(leftArray)
    console.log(rightArray)
    console.log('llllll')
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
  
  const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while(leftArray.length > 0 && rightArray.length > 0){
      if(leftArray[0] < rightArray[0]){
        sortedArray.push(leftArray[0]);//protects from infinite loop
        leftArray.shift();
      }
      else{
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    }
      //console.log(sortedArray, ':', leftArray, ':', rightArray)
      return sortedArray.concat(leftArray).concat(rightArray);//concatenates the remaining elements in either of the arrays(left or right)
  }
  
  mergeSort([12, 14, 13, 15]);
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  //console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };

  //Space compexity O(N)
  //Time complexity Q(N * log N) - splitting takes O(logN) and merging takes O(N)
  //