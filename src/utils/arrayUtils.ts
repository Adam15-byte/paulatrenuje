export function rotateArray(arr: string[]): void {
  setInterval(() => {
    if (arr.length > 0) {
      const firstElement = arr.shift();
      arr.push(firstElement as string);
      console.log(arr);
    }
  }, 3000);
}
