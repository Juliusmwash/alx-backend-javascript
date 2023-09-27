import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const updtPhoto  = uploadPhoto();
  const crtUser= createUser();
  return Promise.all([updtPhoto, crtUser])
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
      () => console.log('Signup system offline'));
}
