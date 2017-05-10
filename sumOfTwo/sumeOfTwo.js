/**
 * Created by Timothy on 5/10/2017.
 */
function sumOfTwo(a, b, v) {
    var i, temp = {};

    if (a.length < b.length) {
        for (i = 0; i < b.length; i++) {
            temp[b[i]] = i;
        }

        for (i = 0; i < a.length; i++) {
            if (temp.hasOwnProperty(v - a[i])) {
                return true;
            }
        }
    } else {
        for (i = 0; i < a.length; i++) {
            temp[a[i]] = i;
        }

        for (i = 0; i < a.length; i++) {
            if (temp.hasOwnProperty(v - b[i])) {
                return true;
            }
        }
    }
    return false;
}