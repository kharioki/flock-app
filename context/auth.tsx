import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSegments } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type UserType = {
  email: string;
  password: string;
  displayName?: string;
};

type ProviderDataType = {
  photoURL?: string;
  phoneNumber?: string;
}

type AuthContextType = {
  user: UserType | null | undefined
  setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>;
  signIn: ({ email, password }: { email: string, password: string}) => void;
  signUp: (input : UserType) => void;
  signOut: () => void;
  signInWithGoogle: () => void;
  updateUserPhoto: (value: ProviderDataType) => void;
};

const authContextDefaultValues: AuthContextType = {
  user: undefined,
  setUser: () => {},
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  signInWithGoogle: () => {},
  updateUserPhoto: () => {},
};

export const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: UserType | null | undefined, isFirstLaunch: boolean | null) {
  const rootSegment = useSegments()[0];
  const router = useRouter();

  const handleRoute = () => {
    if (user === undefined) return;

    if (
      // if the user is not signed in and the initial segment is not anything in the auth group
      !user && rootSegment !== '(auth)'
    ) {
      // if isFirstLaunch is null, return null
      // if isFirstLaunch is true, redirect to the onboarding page
      // else redirect to the sign in page
      if (isFirstLaunch === null) {
        return null;
      } else if (isFirstLaunch == true) {
        router.replace('/introScreen');
      } else {
        router.replace('/signin'); // change to signin after testing intro screen
      }
    } else if (
      // if the user is signed in and the initial segment is not anything in the app group
      user && rootSegment !== '(app)'
    ) {
      // redirect to the home page
      router.replace('/home');
    }
  }

  useEffect(() => {
    handleRoute();
  }, [user, rootSegment, isFirstLaunch]);
}

type ProviderProps = {
  children: React.ReactNode;
};

export function Provider({ ...props }: ProviderProps) {
  const { getItem, setItem, removeItem } = useAsyncStorage('@user');
  const [user, setUser] = useState<UserType | null | undefined>(undefined);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  // get `@alreadLaunched` from AsyncStorage
  const { getItem: getLaunchedItem, setItem: setLaunchedItem } = useAsyncStorage('@alreadyLaunched');

  // check if the app is launched for the first time
  useEffect(() => {
    getLaunchedItem().then((json) => {
      if (json == null) {
        // if `@alreadyLaunched` is not set, the app is launched for the first time
        setLaunchedItem('true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  useEffect(() => {
    getItem().then((json) => {
      // console.log('json', json);
      if (json != null) {
        setUser(JSON.parse(json));
      } else {
        setUser(null);
      }
    });
  }, []);

  // TODO: Implement onAuthStateChanged
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  useProtectedRoute(user, isFirstLaunch);
  // console.log('user: ', user)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn: async ({ email, password }: UserType) => {
          // TODO: implement signInWithEmailandpassword here
          const dummyUser = {
            email: "johndoe@email.com",
            password: "john123",
            displayName: "John Doe"
          }
          setUser(dummyUser)
          setItem(JSON.stringify(dummyUser));
        },
        signUp: async ({ email, password, displayName } : UserType) => {
          // TODO: implement createUserWithEmailAndPassword here, --> createUserWithEmailAndPassword(auth, email, password ). then
          // TODO: implement updateProfile here - save user displayName --> updateProfile(user, { displayName });

          const dummyUser = {
            email: "johndoe@email.com",
            password: "john123",
            displayName: "John Doe"
          }
          setUser(dummyUser)
          setItem(JSON.stringify(dummyUser));
        },
        signOut: async () => {
          // TODO: implement signOut here --> signOut(auth)
          removeItem();
          setUser(null);
        },
        signInWithGoogle: async () => {
          try {
            // TODO: implement signInWithRedirect here --> signInWithRedirect(auth, googleProvider)
            setItem(JSON.stringify(user));
          } catch (error) {
            console.error(error)
          }
        },
        updateUserPhoto: async ({ photoURL }) => {
          // TODO: call user and update --> const user = auth.currentUser as FirebaseUser -- use trycatch

        }
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
