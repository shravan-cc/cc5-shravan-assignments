/**
 * Generates the Fibonacci series up to the specified number.
 * @param num The number specifying how many Fibonacci numbers to generate.
 * @returns An array containing the Fibonacci series up to the specified number.
 */
export function generateFibocacciSeries(num: number): number[] {
  const fib: number[] = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
/**
 * Applies a transformation function to each element in an array and returns a new array with the transformed elements.
 * @param array - The array of elements to be transformed.
 * @param transform - The transformation function to apply to each element.
 * @returns A new array with the transformed elements.
 */
export function map<T, U>(array: T[], transform: (items: T) => U) {
  const mappedArray: U[] = [];
  for (const items of array) {
    mappedArray.push(transform(items));
  }
  return mappedArray;
}

/**
 * Filters an array based on a predicate function and returns a new array with the elements that satisfy the predicate.
 * @param array - The array of elements to be filtered.
 * @param predicate - The predicate function to apply to each element.
 * @returns A new array with the elements that satisfy the predicate.
 */
export function filter<T>(array: T[], predicate: (items: T) => boolean) {
  const filteredArray: T[] = [];
  for (const item of array) {
    if (predicate(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

/**
 * Reduces an array to a single value by applying a reducer function to each element, starting with an initial value.
 * @param array - The array of elements to be reduced.
 * @param reducer - The reducer function to apply to each element.
 * @param initialValue - The initial value to start the reduction.
 * @returns The final reduced value.
 */
export function reduce<T, U>(
  array: T[],
  reducer: (acc: U, value: T) => U,
  initialValue: U
): U {
  let accumulator = initialValue;
  for (const item of array) {
    accumulator = reducer(accumulator, item);
  }
  return accumulator;
}

interface Expect {
  toBe: (expected: number) => void;
  not: { toBe: (expected: number) => void };
}
/**
 * Defines an expectation object for asserting equality of numbers.
 * @param value - The actual value to test against expected values.
 * @returns An expectation object with methods to assert equality and inequality.
 */
export function vitestExpect(value: number): Expect {
  return {
    /**
     * Asserts that the current value is strictly equal to the expected value.
     * @param expected - The expected value for comparison.
     * @throws Error if the current value does not match the expected value.
     */
    toBe: (expected: number) => {
      if (value !== expected) {
        throw new Error(`${value} expected to be ${expected}`);
      }
    },
    /**
     * Asserts that the current value is strictly not equal to the expected value.
     * @param expected - The value expected to be different from the current value.
     * @throws Error if the current value matches the expected value.
     */
    not: {
      toBe: (expected: number) => {
        if (value === expected) {
          throw new Error(`${value} not expected to be ${expected}`);
        }
      },
    },
  };
}

interface ShallowResult {
  name: string;
}
interface DeepResult {
  finalId: number;
}
interface HighLevelQuery {
  firstName: string;
  lastName: string;
}
interface LowLevelQuery {
  id: number;
}
/**
 * Processes a query object to return either a ShallowResult or DeepResult based on its type.
 * @param query - The query object to process, which can be either HighLevelQuery or LowLevelQuery.
 * @returns A ShallowResult if the query is a HighLevelQuery, or a DeepResult if it is a LowLevelQuery.
 */
export function processQuery(query: HighLevelQuery): ShallowResult;
export function processQuery(query: LowLevelQuery): DeepResult;
export function processQuery(
  query: HighLevelQuery | LowLevelQuery
): ShallowResult | DeepResult {
  if (isHighLevelQuery(query)) {
    return processedHighQuery(query);
  } else {
    return processedLowQuery(query);
  }
}

/**
 * Checks if the provided query object is a HighLevelQuery.
 * @param query - The query object to check.
 * @returns True if the query is a HighLevelQuery, false otherwise.
 */
function isHighLevelQuery(
  query: HighLevelQuery | LowLevelQuery
): query is HighLevelQuery {
  return (
    (query as HighLevelQuery).firstName !== undefined &&
    (query as HighLevelQuery).lastName !== undefined
  );
}

/**
 * Processes a HighLevelQuery to return a ShallowResult.
 * @param query - The HighLevelQuery object to process.
 * @returns A ShallowResult containing the concatenated first name and last name.
 */
function processedHighQuery(query: HighLevelQuery) {
  return {
    name: `${query.firstName} ${query.lastName}`,
  };
}

/**
 * Processes a LowLevelQuery to return a DeepResult.
 * @param query - The LowLevelQuery object to process.
 * @returns A DeepResult containing the final ID after adding 2 to the original ID.
 */
function processedLowQuery(query: LowLevelQuery) {
  return {
    finalId: query.id + 2,
  };
}

/**
 * Represents an address with basic details.
 */
interface Address {
  doorNumber: number;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  country: string;
}

/**
 * Extends Address interface to include website information.
 */
interface OfficeAddress extends Address {
  website: string;
}

export const address: OfficeAddress = {
  doorNumber: 1,
  street1: "kavoor",
  city: "mangalore",
  state: "karnataka",
  website: "google.com",
  country: "india",
};

/**
 * Represents a node in a linked list.
 * @template T The type of data stored in the node.
 */
class Node<T> {
  data: T;
  next: Node<T> | null;
  /**
   * Creates an instance of Node.
   * @param data The data to be stored in the node.
   */
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Represents a singly linked list.
 * @template T The type of data stored in the list.
 */
export class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  /**
   * Initializes an empty linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * Adds a new node with the specified data to the end of the linked list.
   * @param data The data to be added to the list.
   * @returns The newly created node.
   */
  addItem(data: T): Node<T> {
    const newNode: Node<T> | null = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
      this.tail = newNode;
    }

    return newNode;
  }
  /**
   * Removes the first occurrence of a node with the specified data from the linked list.
   * @param data The data to be removed from the list.
   * @returns The removed node, or null if no node was found.
   */
  removeItem(data: T): Node<T> | null {
    if (this.head === null || data === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;

      return null;
    }

    if (this.head.data === data) {
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return removedNode;
    }
    let prevNode: Node<T> | null = null;
    let lastNode: Node<T> | null = this.head;
    while (lastNode !== null) {
      if (lastNode.data === data) {
        if (prevNode !== null) {
          prevNode.next = lastNode.next;
        }
        if (lastNode.next === null) {
          this.tail = prevNode;
        }
        return lastNode;
      }
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    return null;
  }
}
