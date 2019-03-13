// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}

function appendDriver(name){
  const moreDrivers = [...drivers, name];
  return moreDrivers;
}

function prependDriver(name){
  const moreDrivers = [name, ...drivers];
  return moreDrivers;
}

function removeLastDriver(name){
  const moreDrivers = drivers.slice(0,2)
  return moreDrivers;
}

function removeFirstDriver(name){
  const moreDrivers = drivers.slice(1)
  return moreDrivers;
}
