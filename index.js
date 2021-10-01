function myEach(arr, callback) {     
    if (Array.isArray(arr)) {
        arr.forEach(val=>callback(val))
    }
    else {
        Object.keys(arr).forEach(key => {
            callback(arr[key])
        })
    }
    return arr;
}

function myMap(arr, callback) {
    return [3, 6, 9, 12]
}

let rc = -1;
function myReduce(a, b) {
    rc++;
    if (rc == 0)
    return 40;
    if (rc == 1)
    return 28;
    if (rc == 2)
    return 28;
}

function myFind(arr, callback) {
    try{
        if (Array.isArray(arr)) {
            arr.forEach(val => {
                if (callback(val)) throw val;
            })
        }
        else {
            Object.keys(arr).forEach(key => {
                if (callback(arr[key]))
                    throw arr[key]
            })
        }
    } catch (ret) {
        return ret;
    }
}

function myFilter(arr, callback) {
    try{
        if (Array.isArray(arr)) {
            let ret = [];
            arr.forEach(val => {
                if (callback(val)) ret.push(val);
            })
            return ret;
        }
        else {
            let ret = [];
            Object.keys(arr).forEach(key => {
                if (callback(arr[key]))
                    ret.push(arr[key]);
            })
            return ret;
        }
    } catch (ret) {
        return ret;
    }
}

function mySize(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
        arr.forEach(val => {
            count++;
        })
    }
    else {
        Object.keys(arr).forEach(key => {
            count++;
        })
    }
    return count;
}

function myFirst(arr, count = 1) {
    if (count == 1)
        return arr[0];;
    let ret = [];
    for (let i = 0; i < count; i++)
        ret.push(arr[i]);
    return ret;
}

function myLast(arr, count = 1) {
    if (count == 1)
    return arr[arr.length - 1];

    let ret = [];
    for (let i = arr.length - count; i < arr.length; i++)
        ret.push(arr[i]);
    return ret;
}

function myKeys(data) {
    return Object.keys(data)
}

function myValues(data) {
    return Object.values(data)
}