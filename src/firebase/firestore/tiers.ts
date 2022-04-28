import firebaseApp from "../firebaseApp";
import "firebase/firestore";
import { Tiers } from "../../types/schema";

const db = firebaseApp.firestore();
const tiersCollection = db.collection("tiers");


/**
 * Returns all tiers data from firestore
 */
 export const getAllTiers = async (): Promise<Tiers[]> => {
    try {
        // query everything in the tier collection
        const allTiers = await tiersCollection.get();
        const promises: Promise<Tiers>[] = allTiers.docs.map((doc) =>
            parseTiers(doc)
        );
        const tiers = await Promise.all(promises);
        return tiers;
    } catch (e) {
        console.warn(e);
        throw e;
    }
};

const parseTiers = async (doc: any) => {
    const data = doc.data();
    const tiers = {
        tier1: data.tier1,
        tier2: data.tier2,
        tier3: data.tier3,
    };
    return tiers as Tiers;
};