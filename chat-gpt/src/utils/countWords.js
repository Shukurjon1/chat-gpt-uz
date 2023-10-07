export default function countWords(count) {
    if (count.length === 0) {
        return 0;
    } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(' ').length;
    }
}