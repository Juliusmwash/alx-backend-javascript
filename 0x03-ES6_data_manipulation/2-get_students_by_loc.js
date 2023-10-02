#!/usr/bin/node

export default function getStudentsByLocation(array, city) {
  return array.filter((obj) => {
    if (obj.location === city) {
      return true;
    }
    return false;
  });
}
