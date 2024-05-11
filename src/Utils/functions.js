export const titleCase = (str) => {
    const arr = str?.split(" ");
    for(let i=0;i<arr.length;i++) {
        arr[i] = arr[i]?.charAt(0)?.toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
}