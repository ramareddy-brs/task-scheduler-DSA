function leastInterval(tasks, n) {
  let taskCount = new Array(26).fill(0);
  
  for (let task of tasks) {
      let index = task.charCodeAt(0) - 'A'.charCodeAt(0);
      taskCount[index]++;
  }
  
  taskCount.sort((a, b) => b - a);
  
  let maxCount = taskCount[0] - 1;
  let idleSlots = maxCount * n;
  
  for (let i = 1; i < taskCount.length; i++) {
      idleSlots -= Math.min(taskCount[i], maxCount);
  }
  
  idleSlots = Math.max(0, idleSlots);
  
  return tasks.length + idleSlots;
}

const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;
const result = leastInterval(tasks, n);
console.log(result);