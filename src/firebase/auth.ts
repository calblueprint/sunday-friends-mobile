import React, { useState, useEffect, createContext, useContext } from "react";
import { User } from "../types/schema";
import firebaseApp from "./firebaseApp";


const auth = firebaseApp.auth();

/**
 * NOTE: We may need to update types for firebase auth in the future
 */

// TODO handle/throw errors accordingly
export const signInWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<void> => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
        console.error(e.message);
        throw e;
    }
};

export const registerWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<User> => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential;
    } catch (e) {
        console.error(e);
        throw e;
    }
    // TODO make sure an entry with corresponding info is created in the admins table
};

export const signOut = async (): Promise<void> => {
    try {
        await auth.signOut();
    } catch (e) {
        console.error(e);
        throw e;
    }
};


// const AuthContext = createContext<User>(null);

// export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
//     children,
// }): JSX.Element => {
//     const [authUser, setAuthUser] = useState<User>(null);

//     useEffect(() => {
//         return auth.onIdTokenChanged(async (user: User): Promise<void> => {
//             if (!user) {
//                 setAuthUser(null);
//                 nookies.set(undefined, "token", "", { path: "/" });
//             } else {
//                 const userToken = await user.getIdToken();
//                 setAuthUser(user);
//                 nookies.set(undefined, "token", userToken, { path: "/" });
//             }
//         });
//     }, []);

//     return (
//         <AuthContext.Provider value= { authUser } > { children } < /AuthContext.Provider>
//   );
// };

// export const useAuth = (): User => {
//     return useContext(AuthContext);
// };
