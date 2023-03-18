


let isAnagram = function(s, t) {
    //ONELINER
    //split both strings sort them and join them
    return s.split('').sort().join('') === t.split('').sort().join('');
};

isAnagram("ant","nat");