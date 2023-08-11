function designerPdfViewer(h, word) {
    var charCount = word.length
    var charMap = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8,
                    j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16,
                    r: 17,s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, 
                    z: 25
                }
    var heightOfEach = []
    for (var i = 0; i < word.length; i++) {
        var char = word[i]; 
        const index = charMap[char]; 
        const value = h[index]; 
        heightOfEach.push(value);
    }
    var area = heightOfEach[0] * charCount
    return area
}
  
var word = 'zaba';

h = [
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 
        5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 
        5, 5, 5, 5, 5, 5
                                        ]

var charMap = { };

for (let i = 0; i < 26; i++) {
    var lowercaseChar = String.fromCharCode(97 + i); 
    // ASCII code for 'a' is 97
    // ASCII code for 'A' is 65
    charMap[lowercaseChar] = i;
}

console.log(charMap);