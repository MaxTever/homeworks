const arr = [4,7,9,10,3,12,2]; 


function selectingSort(arr){
    for (let i = 0; i < arr.length; i++){
        let amax = arr[i];
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < amax){
                amax = arr[j];
                arr[j] = arr[i];
                arr[i] = amax;
            }

        }
    }
    return arr;
}

console.log('Сортировка выбором', selectingSort(arr));


function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log('Пузырьковая сортировка', bubbleSort(arr));


function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let c = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > c){
            arr[j+1] = arr[j];
            j--;
            arr[j+1] = c;

        }
    }
    return arr;
}

console.log('Сортировка вставками', insertionSort(arr));




function shellSort(arr) {
      let step = Math.floor(arr.length / 2);
      
      while (step >= 1){
        for (let i = step; i < arr.length; i++){
          let num = arr[i]
          let j = i;
          while (arr[j - step] > num){
            arr[j] = arr[j - step];
            j -= step;
          }
          arr[j] = num;
        }
        step = Math.floor(step / 2);
      }
      return arr;
}

console.log('Сортировка Шелла', shellSort(arr));



function merge(left, right){
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; 
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2); 
    const left = arr.slice(0, middle); 
    const right = arr.slice(middle); 

    return merge(
        mergeSort(left), 
        mergeSort(right) 
    );
}


console.log('Сортировка методом слияния', mergeSort(arr));




function quickSort(arr){
    if (arr.length < 2){
            return arr;
    } 
    const left = [];
    const right = [];
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    for (let i = 0; i < arr.length; i++){
        if (i === pivotIndex) continue;
            if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
    
    return [...sortedLeft, pivot, ...sortedRight];
}

console.log('Quick Sort', quickSort(arr));


