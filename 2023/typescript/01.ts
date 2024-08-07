import { getInputForDay } from "./util";

const input = getInputForDay(1)
  .split("\n")
  .map((line) =>
    line
      .split("")
      .map((c) => parseInt(c))
      .filter((c) => !isNaN(c)),
  )
  .map((nums) => nums[0] * 10 + nums[nums.length - 1])
  .reduce((acc, curr) => acc + curr, 0);

console.log(input);
