import firebaseApp from "../firebaseApp";
import "firebase/firestore";
import { Family, User, Family_Counter } from "../../types/schema";
import { getUser } from "./user";

const db = firebaseApp.firestore();
const familyCollection = db.collection("families");

/**
 * Returns the family data from firestore with the given userId
 */
export const getFamily = async (familyId: string): Promise<Family> => {
  try {
    const doc = await familyCollection.doc(familyId).get();
    return doc.data() as Family;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Adds a family with a given id to firestore
 */
export const addFamily = async (family: Family): Promise<void> => {
  try {
    await familyCollection.doc(family.family_id.toString()).set(family);
  } catch (e) {
    console.warn(e);
    throw e;
  }
}

export const addMemberToFamily = async (user: User, FID: string): Promise<void> => {
  try {
    var doc = await familyCollection.doc(FID).get()
    const fam = doc.data() as Family;
    if (user.role=="Parent") {
      fam.user_ids = [
        ...fam.user_ids.slice(0, 1),
        user.user_id,
        ...fam.user_ids.slice(1)
      ]
    } else if (user.role == "Child") {
      fam.user_ids.push(user.user_id);
    }

    await familyCollection.doc(FID).set(fam);
  } catch (e) {
    console.warn(e);
    throw e;
  }
}

export const getCountAndIncrement = async (): Promise<number> => {
  try {
    var doc = await familyCollection.doc("count").get()
    const family_counter = doc.data() as Family_Counter;
    family_counter.counter += 1;

    familyCollection.doc("count").set(family_counter)
    return family_counter.counter
  } catch (e) {
    console.warn(e);
    throw e;
  }
}

/**
 * Returns all the families from firestore
 */
export const getAllFamilies = async (): Promise<Family[]> => {
  try {
    const allFamilies = await familyCollection.get();
    const promises: Promise<Family>[] = allFamilies.docs.map((doc) =>
      parseFamily(doc)
    );
    const families = await Promise.all(promises);
    return families;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

/**
 * Returns a family from firestore by ID
 */
export const getFamilyById = async (FID: string): Promise<Family> => {
  try {
    const family = await familyCollection.doc(FID).get();
    //console.log("backend", await parseFamily(family));
    return await parseFamily(family);
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

const parseFamily = async (doc: any) => {
  const family_id = doc.id;
  const data = doc.data();
  const total_points = data.total_points;
  const user_ids = data.user_ids;
  const promises: Promise<User>[] = user_ids.map((user_id: string) => getUser(user_id));
  const users = await Promise.all(promises);
  const family_name = data.family_name;
  const family = { family_id, family_name, total_points, user_ids, users };
  return family as Family;
};
