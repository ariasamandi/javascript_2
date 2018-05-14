//1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggie_size(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(biggie_size([1,2,-12,-3,14]))
//2. Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function print_low_return_high(arr){
    high = arr[0];
    low = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }
        else if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(print_low_return_high([1,3,6,9,0]))
//3. Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function print_one_return_another(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return odd;
}
console.log(print_one_return_another([2,4,6,5,1,7,0]))
//4. Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function double_vision(arr){
    newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr.push(arr[i] * 2);
    }
    return newarr;
}
console.log(double_vision([2,1,8,4]))
//5. Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function count_positives(arr){
    count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count += 1;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(count_positives([1,4,8,19,-3,2]))
//6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evens_and_odds(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            if (arr[i] == arr[i+1] && arr[i] == arr[i+2]){
                console.log("Thats odd!");
                i += 2;
            }
        }
        if (arr[i] % 2 == 0){
            if (arr[i] == arr[i+1] && arr[i] == arr[i+2]){
                console.log("Even more so!");
                i += 2;
            }
        }
    }
}
console.log(evens_and_odds([1,1,1,2,2,2,3,4,5,3,1,1,1,4,2,4,4,4]))
//7. Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function increment_the_seconds(arr){
    for (var i = 0; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    return arr;
}
console.log(increment_the_seconds([1,2,6,4,8,1,8,1,64,2]))
//8. Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.
function previous_lengths(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
console.log(previous_lengths(["aria", "shahan", "Hello", "worlddddd"]))
//9. Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function seven_to_most(arr){
    newarr = [arr[0]];
    for (var i = 1; i < arr.length; i++){
        newarr.push(arr[i] + 7);
    }
    return newarr;
}
console.log(seven_to_most([1,6,19,4,3]))
//10. Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse_array(arr){
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[0+i];
        arr[0+i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(reverse_array([3,6,1,73,11,9]))
//11. Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlook_negative(arr){
    newarr = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(outlook_negative([1,4,3,1,-12,-4,2,-7]))
//12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function always_hungry(arr){
    food = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("Yummy");
            food += 1;
        }
    }
    if (food < 1){
        console.log("I'm Hungry");
    }
}
console.log(always_hungry([1,2,4,6,"food",1,"food"]))
//13. Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swap_toward_center(arr){
    for (var i = 0; i < arr.length/2; i+2){
        temp = arr[0+i];
        arr[0+i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
console.log(swap_toward_center([1,5,"Kevin", "Steven", 2, 6, "aria"]))
//14. Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scale_the_array(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(scale_the_array([1,2,8,9], 10))
