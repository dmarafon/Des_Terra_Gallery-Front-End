export interface UserInformation {
  id: string;
  firstName: string;
  email: string;
  logged: boolean;
}

export interface LoginInformation {
  email: string | null;
  password: string | null;
}

export interface FormData {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  webpage: string;
  address: string;
  apartmentdoorstair: string;
  city: string;
  phonenumber: string;
  artist: string;
  pictureprofile: string;
  imagebackup: string;
}
