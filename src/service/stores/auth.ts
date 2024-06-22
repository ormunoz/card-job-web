import { User, UserSession, UserLocal } from "@/service/auth/types";
import { defineStore } from "pinia";

// Define a Pinia store for managing authentication-related state and actions
export const useAuthStore = defineStore("auth", {
    state: () => {
        // Load user and user session data from local storage if available
        const localStorageUser = localStorage.getItem("user");
        const localStorageUserSession = localStorage.getItem("userSession");

        let user: UserLocal | null = null;
        let userSession: UserSession | null = null;

        if (localStorageUser) {
            user = JSON.parse(localStorageUser);
        }
        if (localStorageUserSession) {
            userSession = JSON.parse(localStorageUserSession);
        }

        // Initialize the store's state
        return {
            token: localStorage.getItem("token"),
            user: user,
            userSession: userSession,
        };
    },

    actions: {
        // Set the authentication token and store it in local storage
        setToken(token: string) {
            this.token = token;
            localStorage.setItem("token", token);
        },

        // Set the user information and store it in local storage
        setUser(user: UserLocal) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },

        // Set the user session information and store it in local storage
        setUserSession(userSession: UserSession) {
            this.userSession = userSession;
            localStorage.setItem("userSession", JSON.stringify(userSession));
        },

        // Logout by clearing the token and user information from the store and local storage
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    },

    getters: {
        // Check if a user is authenticated based on the presence of user data
        userIsAuthenticated(state): boolean {
            return state.user != null;
        }
    }
})

export type AuthStore = ReturnType<typeof useAuthStore>
