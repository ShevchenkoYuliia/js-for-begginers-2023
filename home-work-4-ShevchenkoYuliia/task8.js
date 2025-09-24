/* допишіть код, щоб функція `createArrayIterator()` повертала функцію, яка будет перелічувати елементи масиву, 
який задається через параметр `array`*/

function createArrayIterator(array) {
    var index = 0;
    // Ваш код
    return function() {
        if(index < array.length) {
            return array[index++];
        }
        else{
            return undefined;
        }
    };
}
 
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined