export function add(x, y) {
    return x + y;
}
export function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
