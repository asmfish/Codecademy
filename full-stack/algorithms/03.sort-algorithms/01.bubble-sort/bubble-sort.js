//Bubble sort has runtime complexity of O(N^2)
//n(n-1)= n*2 -n = O(n^2)
//Best-case runtime is O(n) for an already-sorted list.
const arr = [20, 5, 10, 30, 11, 22, 31];

let temp;

for(let i=0; i < arr.length - 1; i++){
  for(let j=i+1; j < arr.length;j++){
    if(arr[i] > arr[j]){
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);