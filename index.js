function takeANumber(array, person) {
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let person = array.shift();
    return `Currently serving ${array[array.length]}`;
  }
}
