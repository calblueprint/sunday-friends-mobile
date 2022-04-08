import firebaseApp from "../firebaseApp";
import "firebase/firestore";
import { User_Invite } from "../../types/schema";

const db = firebaseApp.firestore();
const userInvitesCollection = db.collection("user_invites");

/**
 * Returns the userInvite data from firestore with the given userInviteId
 */
export const getUserInvite = async (
  userInviteId: string
): Promise<User_Invite> => {
  try {
    const doc = await userInvitesCollection.doc(userInviteId).get();
    return parseUserInvite(doc);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Returns all userInvite data from firestore
 */
export const getAlluserInvites = async (): Promise<User_Invite[]> => {
  try {
    // query everything in the userInvite collection
    const allUserInvites = await userInvitesCollection.get();
    const promises: Promise<User_Invite>[] = allUserInvites.docs.map((doc) =>
      parseUserInvite(doc)
    );
    const userInvites = await Promise.all(promises);
    return userInvites;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Adds the given userInvite data to firestore
 */
export const addUserInvite = async (userInvite: User_Invite): Promise<void> => {
  try {
    await userInvitesCollection.doc().set(userInvite);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Returns the family of userInvite data from firestore with the given userId
 */
export const getUserInviteByFamily = async (
  family_id: string
): Promise<User_Invite[]> => {
  try {
    const promises: Promise<User_Invite>[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getUserInvites = await userInvitesCollection
      .where("family_id", "==", family_id)
      .get()
      .then((doc) => {
        doc.forEach((item) => promises.push(parseUserInvite(item)));
      });
    const userInvites = await Promise.all(promises);
    return userInvites;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Returns userInvite data from firestore with the given email and status == "hHad"
 */
export const getHeadInvitesByEmail = async (
  email: string
): Promise<User_Invite[]> => {
  try {
    const promises: Promise<User_Invite>[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getUserInvites = await userInvitesCollection
      .where("email", "==", email)
      .where("status", "==", "Head")
      .get()
      .then((doc) => {
        doc.forEach((item) => promises.push(parseUserInvite(item)));
      });
    const userInvites = await Promise.all(promises);
    return userInvites;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// TODO replace doc with proper type
const parseUserInvite = async (doc: any) => {
  const data = doc.data();
  const user_invite_id = doc.id as string;
  const family_id = data.family_id;
  const email = data.email;
  const name = data.name;
  const status = data.status;
  const userInvite = { user_invite_id, family_id, name, email, status };
  return userInvite as User_Invite;
};
