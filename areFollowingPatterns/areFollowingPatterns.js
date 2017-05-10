/**
 * Created by Timothy on 5/10/2017.
 */
areFollowingPatterns = (strings, patterns) => {
    var i, l = patterns.length, temp = {}, temp1 = {};

    for (i = 0; i < l; i++) {
        if (!temp.hasOwnProperty(strings[i])) {
            temp[strings[i]] = patterns[i];
        } else if (temp[strings[i]] !== patterns[i]) {
            return false;
        }

        if (!temp1.hasOwnProperty(patterns[i])) {
            temp1[patterns[i]] = strings[i];
        } else if (temp1[patterns[i]] !== strings[i]) {
            return false;
        }
    }

    return true;
};