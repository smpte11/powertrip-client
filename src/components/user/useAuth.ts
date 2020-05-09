import * as firebase from "firebase/app";
import {
  computed,
  inject,
  InjectionKey,
  provide,
  reactive,
  toRefs,
  watchEffect,
  watch,
} from "@vue/composition-api";

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
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      state.token = await response.user?.getIdToken();
    } catch (error) {
      state.error = error;
    }
  }

  async function signin(email: Email, password: Password) {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      state.token = await response.user?.getIdToken();
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
