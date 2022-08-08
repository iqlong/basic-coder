/**
 * @param {string} s
 * @return {string}
 */

function capital(char) {
    const charAsii = char.charCodeAt()
    if(charAsii <= 90 && charAsii >= 65) {
        return true
    }else {
        return false
    }
}
var greatestLetter = function(s) {
    let res = ''
    for(const char of s) {
        if(capital(char)) {
            // 是大写的情况
            const ascii = char.charCodeAt()
            const transeChar = String.fromCharCode(32 + ascii)
            if(s.includes(transeChar)) {
                if(res == '') {
                    res = char;
                }else {
                    ascii > res.charCodeAt() ? res = char : ''
                }
            }

        }else {
            const ascii = char.charCodeAt()
            const transeChar = String.fromCharCode(ascii - 32)
            if(s.includes(transeChar)) {
                if(res == '') {
                    res = transeChar;
                }else {
                    ascii - 32 > res.charCodeAt() ? res = transeChar : ''
                }
            }
        }
    }

    return res
};
