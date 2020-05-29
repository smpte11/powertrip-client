import * as firebase from "firebase/app";
import {
  inject,
  InjectionKey,
  provide,
  reactive,
  toRefs,
} from "@vue/composition-api";

import config from "@/config";

type Email = string;
type Password = string;
type State = {
  loading: boolean;
  error?: Error;
};

function useProvideAuth() {
  const state = reactive<State>({ loading: true });

  async function signup(email: Email, password: Password) {
    // NOTE weird behaviour with 400 that doesn't throw...
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const token = await user?.getIdToken();

      if (!token) throw Error("No auth token available");

      localStorage.setItem(config.TOKEN_KEY, token);
      config.apolloClient.writeData({
        data: {
          isLoggedIn: !!token,
          me: {
            __typename: "User",
            id: user?.uid,
            email: user?.email,
          },
        },
      });
    } catch (error) {
      state.error = error;
    }
  }

  async function signin(email: Email, password: Password) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const token = await user?.getIdToken();

      if (!token) throw Error("No auth token available");

      localStorage.setItem(config.TOKEN_KEY, token);
      config.apolloClient.writeData({
        data: {
          isLoggedIn: !!token,
          me: {
            __typename: "User",
            id: user?.uid,
            email: user?.email,
          },
        },
      });
    } catch (error) {
      state.error = error;
    }
  }

  async function signout() {
    try {
      await firebase.auth().signOut();
      await config.apolloClient.clearStore();
      localStorage.removeItem(config.TOKEN_KEY);
      config.apolloClient.writeData({
        data: {
          isLoggedIn: false,
        },
      });
    } catch (error) {
      state.error = error;
    }
  }

  firebase.auth().onAuthStateChanged((user) => {
    const token = localStorage.getItem(config.TOKEN_KEY);
    if (user) {
      config.apolloClient.writeData({
        data: {
          isLoggedIn: !!token,
          me: {
            __typename: "User",
            id: user?.uid,
            email: user?.email,
          },
        },
      });
    } else {
      config.apolloClient.clearStore();
      localStorage.removeItem(config.TOKEN_KEY);
    }
    state.loading = false;
  });

  return {
    signin,
    signup,
    signout,
    ...toRefs(state),
  };
}

type UseAuth = ReturnType<typeof useProvideAuth>;
const AuthKey: InjectionKey<UseAuth> = Symbol("UseAuth");

export function provideAuth() {
  const auth = useProvideAuth();
  provide(AuthKey, auth);
}

function useAuth() {
  const auth = inject(AuthKey);
  if (!auth) throw Error();
  return auth;
}

export default useAuth;
