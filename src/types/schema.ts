import firebase from "firebase/app";

export type Transaction = {
  admin_name: string;
  date: Date | string;
  deleteDate: Date | string;
  description: string | null;
  family_id: string;
  point_gain: number;
  user_name: string;
};

export type Family = {
  total_points: number;
  family_name: string;
  user_ids: string[];
  users: User[];
  family_id: number;
};

export type User = {
  user_id: string;
  address: string;
  created_at: Date | firebase.firestore.Timestamp | string;
  email: string;
  role: string;
  family_id: number;
  full_name: string;
  last_active: Date | firebase.firestore.Timestamp | string;
  parent: boolean;
  points: number;
  reward_eligible: boolean;
  suspended: boolean;
  phone_number: string;
  transactions: Transaction[];
};

export type User_Invite = {
  family_id: number;
  name: string;
  email: string;
  status: string;
  user_invite_id: string;
};

export type Tiers = {
  tier1: number;
  tier2: number;
  tier3: number;
  tier1title: string;
  tier2title: string;
  tier3title: string;
  tier1description: string;
  tier2description: string;
  tier3description: string;
};


export type Family_Counter = {
  counter: number;
};
  
