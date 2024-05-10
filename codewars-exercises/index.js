var isAnagram = function(test, original) {
    test = test.replace('/\s/g', '').toLowerCase();
    original = original.replace('/\s/g','').toLowerCase();
    
    if(test.length != original.length){
        return false;
    }

    test = test.split('').sort().join('');
    original = original.split('').sort().join('');

    return test === original;

}