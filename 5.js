if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {
        let startIndex = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0);

        for (let i = startIndex; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3));
console.log(arr.customIncludes(6));
console.log(arr.customIncludes(2, 2));
console.log(arr.customIncludes(2, -4));
