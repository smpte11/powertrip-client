import * as firebase from "firebase/app";
import {
  computed,
  inject,
  InjectionKey,
  provide,
  reactive,
  toRefs,
} from "@vue/composition-api";

import config, { TOKEN_KEY } from "@/config";

type Email = string;
type Password = string;
type State = {
  user: firebase.User | null;
  token?: string;
  error?: Error;
};

function useProvideAuth() {
  const state = reactive<State>({ user: null });

  async function signup(email: Email, password: Password) {
    // NOTE weird behaviour with 400 that doesn't throw...
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const token = await user?.getIdToken();

      if (!token) throw Error("No auth token available");

      localStorage.setItem(TOKEN_KEY, token);
      config.apolloClient.writeData({
        data: {
          user: {
            __typename: "User",
            id: user?.uid,
            email: user?.email,
            token,
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

      localStorage.setItem(TOKEN_KEY, token);
      config.apolloClient.writeData({
        data: {
          user: {
            __typename: "User",
            id: user?.uid,
            email: user?.email,
            token,
          },
        },
      });
    } catch (error) {
      state.error = error;
    }
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      state.user = user;
    } else {
      state.user = null;
    }
  });

  const isLogged = computed(() => !!state.user && !!state.token);

  return {
    isLogged,
    signin,
    signup,
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
