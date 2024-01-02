export function rotateArray(arr: string[]): void {
  setInterval(() => {
    if (arr.length > 0) {
      const firstElement = arr.shift();
      arr.push(firstElement as string);
    }
  }, 3000);
}
