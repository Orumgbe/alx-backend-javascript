import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const upload = await uploadPhoto();
    const value = await createUser();
    console.log(upload.body, value.firstName, value.lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
