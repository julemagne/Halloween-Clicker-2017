export function sampleAndRemove(array: Array<any>) {
  let index = Math.floor(Math.random() * array.length);
  let monster = array[index];
  array.splice(index, 1);
  console.log(index, monster, array)
  return monster;
}