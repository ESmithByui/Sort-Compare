const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class num_list{
  private merge_array: number[] = [];
  private quick_array: number[] = [];
  private bubble_array: number[] = [];
  private merge_count: number = 0;
  private merge_time: number = 0;
  private quick_count: number = 0;
  private quick_time: number = 0;
  private bubble_count: number = 0;
  private bubble_time: number = 0;
  private name: String;

  public constructor(name: String, length: number, min: number, max:number) {
    this.name = name
    this.make_random_array(length, min, max, this.merge_array)
    this.copy_array(this.merge_array, this.quick_array)
    this.copy_array(this.merge_array, this.bubble_array)

  }

  public get_count() : [number, number, number] {
    return [this.merge_count, this.quick_count, this.bubble_count]
  }

  public get_time() : [number, number, number] {
    return [this.merge_time, this.quick_time, this.bubble_time]
  }

  public run() : void {
    console.clear()
    console.log(`Begining comparison of list [${this.name}]`);

    console.log('Starting merge sort');
    let start: number = new Date().getTime();
    this.merge_count = this.merge_sort(this.merge_array);
    this.merge_time = new Date().getTime() - start;
    console.log('Ended merge sort');

    console.log('Starting quick sort');
    start = new Date().getTime();
    this.quick_count = this.quick_sort(this.quick_array);
    this.quick_time = new Date().getTime() - start;
    console.log('Ended quick sort');

    console.log('Starting bubble sort');
    start = new Date().getTime();
    this.bubble_count = this.bubble_sort(this.bubble_array);
    this.bubble_time = new Date().getTime() - start;
    console.log('Ended bubble sort');

    console.clear()

  }

  public display() : void {
    console.log(`List [${this.name}] results:`);
    console.log(`[${this.merge_array[0]}, ${this.merge_array[1]}, ${this.merge_array[2]} ... ${this.merge_array[this.merge_array.length - 3]}, ${this.merge_array[this.merge_array.length - 2]}, ${this.merge_array[this.merge_array.length - 1]}]`);
    console.log(`\nMerge sort`);
    console.log(`Completed in ${(`${Math.floor((this.merge_time / 1000) / 60)} min : ${Math.floor((this.merge_time / 1000) % 60)} sec : ${Math.floor((this.merge_time % 1000))} ms`)} with ${this.merge_count} comparisons`);
    console.log(`\nQuick sort`);
    console.log(`Completed in ${(`${Math.floor((this.quick_time / 1000) / 60)} min : ${Math.floor((this.quick_time / 1000) % 60)} sec : ${Math.floor((this.quick_time % 1000))} ms`)} with ${this.quick_count} comparisons`);
    console.log(`\nBubble sort`);
    console.log(`Completed in ${(`${Math.floor((this.bubble_time / 1000) / 60)} min : ${Math.floor((this.bubble_time / 1000) % 60)} sec : ${Math.floor((this.bubble_time % 1000))} ms`)} with ${this.bubble_count} comparisons`);
    console.log(`\n\n`)
  }

  private make_random_array(length: number, min: number, max:number, list: number[]) : void {
    list.length = 0;
    let i: number = 0;
  
    while (i < length) {
      list[i] = this.random_int(min, max);
      i += 1;
    }
  }

  private copy_array(list_1: number[], list_2: number[]) : void {
    list_2.length = 0;
    for (let i: number = 0; i < list_1.length; i++) {
      list_2[i] = list_1[i]
    }
  }

  private random_int(min: number, max:number) : number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private merge_sort(list: number[]) : number {
    let operation_count: number = 0;
    if (list.length > 1) {
      let middle: number = Math.floor(list.length / 2);
  
      const left_list: number[] = list.slice(0, middle);
      const right_list: number[] = list.slice(middle);
  
      operation_count += this.merge_sort(left_list);
      operation_count += this.merge_sort(right_list);
  
      let i: number = 0;
      let j: number = 0;
      let k: number = 0;
  
      while ((i < left_list.length) && (j < right_list.length)) {
        if (left_list[i] < right_list[j]) {
          list[k] = left_list[i];
          i += 1;
        }
        else {
          list[k] = right_list[j];
          j += 1;
        }
        k += 1;
        operation_count += 1;
  
      }
  
      while (i < left_list.length) {
        list[k] = left_list[i];
        i += 1;
        k += 1;
        operation_count += 1;
      }
  
      while (j < right_list.length) {
        list[k] = right_list[j];
        j += 1;
        k += 1;
        operation_count += 1;
      }
    }
    return operation_count;
  }

  private quick_sort(list: number[]): number {
    let operation_count = 0;
  
    function partition(start: number, end: number): number {
      let pivot = list[end];
      let i = start - 1;
  
      for (let j = start; j < end; j++) {
        operation_count++;
        if (list[j] < pivot) {
          i++;
          [list[i], list[j]] = [list[j], list[i]];  // swap
        }
      }
      [list[i + 1], list[end]] = [list[end], list[i + 1]];  // Place pivot correctly
      return i + 1;
    }
  
    function recursive_quick_sort(start: number, end: number) {
      if (start < end) {
        let pivot_index = partition(start, end);
        recursive_quick_sort(start, pivot_index - 1);
        recursive_quick_sort(pivot_index + 1, end);
      }
    }
  
    recursive_quick_sort(0, list.length - 1);
    return operation_count;
  }
    
  private bubble_sort(list: number[]) : number {
    let operation_count: number = 0;
  
    let swapped: boolean;
  
    let i: number;
    let j: number;
    let temp: number;
  
    for (i=0; i< list.length - 1; i++) {
      swapped = false;
      for (j=0; j<list.length - i - 1; j++){
        if (list[j] > list[j + 1]) {
          temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
          swapped = true;
        }
        operation_count += 1;
      }
  
      if (swapped == false) {
        return operation_count
      }
    }
  
    return -1;
  }

}

function get_random_int(min: number, max:number) : number {
  return Math.floor(Math.random() * (max - min) + min);
}

let sets: number = 0;
let list_length: number = 0;
let min: number = 0;
let max: number = 0;


const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
  try {
    list_length = parseInt(await askQuestion("How long should the lists be: "));
    min = parseInt(await askQuestion("What is the lowest number: "));
    max = parseInt(await askQuestion("What is the highest number: "));
    sets = parseInt(await askQuestion("How many lists should be processed: "));

    console.log(`Creating ${sets} lists containing ${list_length} numbers between ${min} and ${max}`);
  } finally {
    const lists: num_list[] = [];

    for (let i: number = 0; i < sets; i++) {
      lists[i] = new num_list((`${i + 1}`), list_length, min, max);
    } // create the num_lists

    for (let i: number = 0; i < sets; i++) {
      lists[i].run();
    } // run the num_lists

    let total_merge_count: number = 0;
    let total_quick_count: number = 0;
    let total_bubble_count: number = 0;
    let total_merge_time: number = 0;
    let total_quick_time: number = 0;
    let total_bubble_time: number = 0;

    for (let i: number = 0; i < sets; i++) {
      let counts: [number, number, number] = lists[i].get_count();
      total_merge_count += counts[0];
      total_quick_count += counts[1];
      total_bubble_count += counts[2];

      let times: [number, number, number] = lists[i].get_time();
      total_merge_time += times[0];
      total_quick_time += times[1];
      total_bubble_time += times[2];
    }

    let merge_count_average: number = total_merge_count / sets
    let merge_time_average: number = total_merge_time / sets
    let quick_count_average: number = total_quick_count / sets
    let quick_time_average: number = total_quick_time / sets
    let bubble_count_average: number = total_bubble_count / sets
    let bubble_time_average: number = total_bubble_time / sets
    let total_time: number = total_merge_time + total_quick_time + total_bubble_time;

    console.log(`Results:`);
    console.log(`Total time to complete: ${(`${Math.floor((total_time / 1000) / 60)} min : ${Math.floor((total_time / 1000) % 60)} sec : ${Math.floor((total_time % 1000))} ms`)}`)
    console.log(`\nMerge sort`);
    console.log(`Average comparison count: ${merge_count_average}`)
    console.log(`Average time to complete: ${(`${Math.floor((merge_time_average / 1000) / 60)} min : ${Math.floor((merge_time_average / 1000) % 60)} sec : ${Math.floor((merge_time_average % 1000))} ms`)}`)
    
    console.log(`\nQuick sort`);
    console.log(`Average comparison count: ${quick_count_average}`)
    console.log(`Average time to complete: ${(`${Math.floor((quick_time_average / 1000) / 60)} min : ${Math.floor((quick_time_average / 1000) % 60)} sec : ${Math.floor((quick_time_average % 1000))} ms`)}`)
    
    console.log(`\nBubble sort`);
    console.log(`Average comparison count: ${bubble_count_average}`)
    console.log(`Average time to complete: ${(`${Math.floor((bubble_time_average / 1000) / 60)} min : ${Math.floor((bubble_time_average / 1000) % 60)} sec : ${Math.floor((bubble_time_average % 1000))} ms`)}`)
    



    rl.close();
  }
})();

