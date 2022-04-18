// import React, { useContext } from "react";
// import {User} from "../types/schema";

// const defaultUser: User = {
//   user_id: "",
//   address: "",
//   created_at: "",
//   email: "",
//   role: "",
//   family_id: 0,
//   full_name: "",
//   last_active: new Date(),
//   parent: false,
//   points: 0,
//   reward_eligible: false,
//   suspended: false,
//   phone_number: "",
//   transactions: [],
// };

// // const userContext = React.createContext({
// //   user: defaultUser,
// //   etUser: (user: User) => {},
// // });

// const userContext = React.createContext("");

// export default userContext;


import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [userUID, setUserUID] = useState(null);

  return (
    <AuthenticatedUserContext.Provider>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};