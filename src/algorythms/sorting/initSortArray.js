export function initSortArray() {
    return Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
}