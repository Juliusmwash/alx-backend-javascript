import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const updatePhoto  = uploadPhoto();
  const createUser = createUser();
  return Promise.all([updatePhoto, createUser])
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
      () => console.log('Signup system offline'));
}
