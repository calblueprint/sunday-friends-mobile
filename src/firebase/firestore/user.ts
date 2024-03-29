import firebaseApp from "../firebaseApp";
import "firebase/firestore";
import { Transaction, User } from "../../types/schema";
import { getTransactionByUser } from "./transaction";

const db = firebaseApp.firestore();
const userCollection = db.collection("users");

/**
 * Returns the user data from firestore with the given userId
 */
export const getUser = async (userId: string): Promise<User> => {
  try {
    const trimedId = userId.toString().replace(/\s/g, "");
    const doc = await userCollection.doc(trimedId).get();
    return parseUser(doc);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Returns all the users from firestore
 */
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const allUsers = await userCollection.get();
    const promises: Promise<User>[] = allUsers.docs.map((doc) =>
      parseUser(doc)
    );
    const users = await Promise.all(promises);
    return users;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Returns all the users from firestore on conditional
 */
export const getUsersSearch = async (searchQ: string): Promise<User[]> => {
  try {
    const promises: Promise<User>[] = [];
    await userCollection
      .where("name", ">=", searchQ)
      .where("name", "<=", searchQ + "\uf8ff")
      .get()
      .then((doc) => {
        doc.forEach((item) => promises.push(parseUser(item)));
      });
    const users = await Promise.all(promises);
    //console.log("backend", users, searchQ);
    return users;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Returns the users from firestore by role
 */
export const getFilteredUsers = async (role: string): Promise<User[]> => {
  try {
    const promises: Promise<User>[] = [];
    var query: any = userCollection;
    if (role && role !== "All Roles") {
      query = query.where("role", "==", role);
    }
    await query.get().then((doc: any) => {
      doc.forEach((item: any) => promises.push(parseUser(item)));
    });
    const users = await Promise.all(promises);
    //console.log("backend", users);
    return users;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Adds the given user data to firestore
 */
export const addUser = async (user: User): Promise<void> => {
  try {
    await userCollection.doc(user.user_id).set(user);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Deletes the user from firestore with the given userId
 */
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await userCollection.doc(userId).delete();
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Edits the profile fields of the given user and an array with keys of user fields
 */
 export const editUser = async (userId: string, values: any): Promise<void> => {
  try {
    await userCollection.doc(userId).update(values);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Edits the given user data from with the family ID created when creating a family
 */
 export const editUserFamilyID = async (
  userId: string,
  family_id: number,
): Promise<void> => {
  try {
    const doc = await userCollection.doc(userId).get();
    const data = doc.data() as User;
    data.family_id = family_id;

    userCollection.doc(userId).set(data);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Changes the password of the user that is currently signed in with the given string
 */
export const setUserPassword = async (password: string): Promise<void> => {
	try {
		firebaseApp.auth().currentUser?.updatePassword(password);
	} catch(e) {
		console.warn(e);
		throw(e);
	}
}

export const updatePersonalBalance = async (user_id: string, balance: number): Promise<void> => {
  try {
    var doc = await userCollection.doc(user_id).get();
    const user = doc.data() as User;
    user.points = balance;
    userCollection.doc(user_id).set(user);
  } catch (e) {
    console.warn(e);
    throw e;
  }
}

const parseUser = async (doc: any) => {
  const user_id = doc.id.toString();
  const data = doc.data();
  const promise: Promise<Transaction[]> = getTransactionByUser(user_id);
  const transactions = await promise;
  const user = {
    user_id: user_id,
    address: data.address,
    created_at: new Date(data.created_at.toMillis()).toLocaleDateString(),
    email: data.email,
    role: data.role,
    family_id: data.family_id,
    full_name: data.full_name,
    last_active: new Date(data.last_active.toMillis()).toLocaleDateString(),
    parent: data.parent,
    points: data.points,
    reward_eligible: data.reward_eligible,
    suspended: data.suspended,
    phone_number: data.phone_number,
    transactions: transactions,
  };
  return user as User;
};
