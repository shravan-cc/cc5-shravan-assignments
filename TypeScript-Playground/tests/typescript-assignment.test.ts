import { test, expect, describe } from "vitest";
import {
  generateFibocacciSeries,
  map,
  filter,
  reduce,
  customExpect,
  processQuery,
  LinkedList,
  address,
  FileSystem,
} from "../src/typescript-assignment";

/**
 * Test suite for generic utility functions map, filter, and reduce.
 */
describe("Tests for assignment questions on typescript", () => {
  /**
   * Test case for generating fibonacci Series
   */
  test("Test for generating fibonacci series", () => {
    expect(generateFibocacciSeries(10)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
  /**
   * Test case for the map function.
   * Converts numbers to strings.
   */
  test("Tests for generics using map function", () => {
    /**
     * Function to convert a number to a string.
     * @param num - The number to convert.
     * @returns The number as a string.
     */
    function converToString(num: number): string {
      return num.toString();
    }
    expect(map([1, 2, 3], converToString)).toEqual(["1", "2", "3"]);
  });
  /**
   * Test case for the filter function.
   * Filters out odd numbers from an array of numbers.
   */
  test("Tests for generics using filter function", () => {
    /**
     * Function to check if a number is even.
     * @param num - The number to check.
     * @returns True if the number is even, false otherwise.
     */
    function isEven(num: number): boolean {
      return num % 2 === 0;
    }
    expect(filter([2, 3, 4, 5, 6], isEven)).toEqual([2, 4, 6]);
  });
  /**
   * Test case for the reduce function.
   * Sums an array of numbers.
   */
  test("Tests for generics using reduce function", () => {
    /**
     * Function to sum two numbers.
     * @param acc - The accumulator.
     * @param value - The current value.
     * @returns The sum of the accumulator and the current value.
     */
    function sum(acc: number, value: number): number {
      return acc + value;
    }
    expect(reduce([2, 4, 6], sum, 0)).toEqual(12);
  });
  /**
   * Test case for the vitestExpect function.
   * Tests assertions using vitestExpect.
   */
  test("Tests for implementing expect function of vitest", () => {
    customExpect(5).toBe(5);
    customExpect(5).not.toBe(6);
  });
  /**
   * Test case for function overloading in processQuery function.
   * Tests different query types and their corresponding results.
   */
  test("Tests for implementation of function overloading", () => {
    // Test case for HighLevelQuery
    expect(processQuery({ firstName: "shravan", lastName: "hegde" })).toEqual({
      name: "shravan hegde",
    });
    // Test case for LowLevelQuery
    expect(processQuery({ id: 25 })).toEqual({ finalId: 27 });
  });
  test("Tests For contact address interface", () => {
    expect(address).toEqual({
      city: "mangalore",
      country: "india",
      doorNumber: 1,
      state: "karnataka",
      street1: "kavoor",
      website: "google.com",
    });
  });
  /**
   * Test case for the LinkedList class, which implements a generic singly linked list.
   */
  test("Tests for implementing generic version of linked list", () => {
    const list = new LinkedList<number>();

    list.addItem(1);
    list.addItem(2);
    list.addItem(3);
    list.addItem(4);

    expect(list).not.toBe(null);

    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(4);

    list.removeItem(4);
    list.removeItem(3);

    expect(list.tail?.data).toBe(2);
  });
  /**
   * Test case for the File System Implementation
   */
  test("Tests for implementing File System", () => {
    const fs = new FileSystem();
    const folder1 = fs.createFolder("/folder1");
    // Create files at different paths within the file system
    const file1 = fs.createFile("/file1.txt", 50);
    const file2 = fs.createFile("/folder1/file2.txt", 100);
    const file3 = fs.createFile("/folder1/file3.txt", 200);

    // Assertions for created files
    expect(file1).toBeDefined();
    expect(file2?.getPath()).toEqual("/folder1/file2.txt");
    expect(file3?.getPath()).toEqual("/folder1/file3.txt");

    // Assertions for folder size calculations
    expect(folder1?.getSize()).toEqual(300);
    expect(fs.root.getSize()).toEqual(350);
  });
});
