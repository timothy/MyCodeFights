/**
 * Created by Timothy on 5/11/2017.
 */
firstNotRepeatingCharacter = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i + 1) === -1) {
            if (s.indexOf(s[i]) === i) {
                return s[i];
            }
        }
    }
    return '_';
};

console.log(firstNotRepeatingCharacter("abacabad"));