import Classroom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  array[0] = new Classroom(19);
  array[1] = new Classroom(20);
  array[2] = new Classroom(34);
  return array;
}
