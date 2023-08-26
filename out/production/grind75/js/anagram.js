


let isAnagram = function(s, t) {
    //ONELINER
    //split both strings sort them and join them
    //use .sort which puts them in alphabetical order and compare
    return s.split('').sort().join('') === t.split('').sort().join('');
};

isAnagram("ant","nat");