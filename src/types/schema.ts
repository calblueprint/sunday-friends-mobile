import firebase from 'firebase/app';

export type Transaction = {
    admin_name: string;
    date: Date | string;
    description: string | null;
    family_id: string;
    point_gain: number;
    user_name: string;
};

export type Family = {
    total_points: number;
    family_name: string;
    user_ids: User[];
    family_id: string;
  };

  export type User = {
    user_id: string;
    address: string;
    created_at: Date | firebase.firestore.Timestamp | string;
    email: string;
    role: string;
    family_id: number;
    full_name: string;
    last_active: Date | firebase.firestore.Timestamp;
    parent: boolean;
    points: number;
    reward_eligible: boolean;
    suspended: boolean;
    phone_number: string;
    transactions: Transaction[];
  };