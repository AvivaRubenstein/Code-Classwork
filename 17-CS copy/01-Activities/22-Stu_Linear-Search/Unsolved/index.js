const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    for (i =0; i < array.length; i++){
        if(array[i] === element) {
            return i;
        }
    }
    //if we don't find that item in the array:
    return -1;
};


linearSearch(arr, 6);
//should return that it's at index 5