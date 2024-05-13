// api/profileApi.ts

import axios from "axios";

export interface UserProfile {
  name: string;
  bio: string;
  location: string;
  nationality: string;
  availability: boolean;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  twitter: string;
  linkedin: string;
  expectedSalary: number;
  ownACar: boolean;
  haveDrivingLicense: boolean;
  noticePeriod: number;
  immigrationStatus: string;
  referees: string;
  willingToRelocate: boolean;
  languages: string;
  skills: string;
  imageUrl: string;
}

export const fetchProfileById = async (id: string): Promise<UserProfile> => {
  const response = await axios.get<UserProfile>(`/profile/${id}`);
  return response.data;
};
