function aggregateElements(elements: number[]): void {
    const sum: number = elements.reduce((acc, curr) => acc + curr, 0);
    const inverseSum: number = elements.reduce((acc, curr) => acc + 1 / curr, 0);
    const concat: string = elements.join('');
  
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
  }
  
  aggregateElements([1, 2, 3]);
  aggregateElements([2, 4, 8, 16]);
  