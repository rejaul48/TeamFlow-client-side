import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase_cofig';
import axios from "axios";
import useAxiosPublic from './../hooks/useAxiosPublic';



const auth = getAuth(app);
export const TeamFlowContext = createContext()

const TeamFlowProvier = ({ children }) => {


    const [user, setUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const axiosPublic = useAxiosPublic()
    // get current user

    // toggle mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist the theme in localStorage
    };

    // Apply theme to body element when it changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // toggle mode 


    // new user register with email and password
    const newUserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // register user login with email and password
    const registerUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user login with google
    const provider = new GoogleAuthProvider()
    const loginWithGoole = () => {
        return signInWithPopup(auth, provider)
    }

    // user logout
    const userLogOut = () => {
        return signOut(auth)
    }


    //  auth sate

    useEffect(() => {
        setLoader(true);

        const handleAuthStateChange = async (currentUserLogin) => {
            console.log("Auth State Changed:", currentUserLogin);
            setUser(currentUserLogin);
            console.log(currentUserLogin?.email)

            if (currentUserLogin?.email) {
                try {
                    // Step 1: Fetch the user's role from the backend
                    // const response = await axiosPublic.post(`/check-user-role`, {currentUserLogin.email})
                    const response = await axiosPublic.post('/check-user-role',
                        { email: currentUserLogin?.email }, { withCredentials: true }
                    );
                    console.log(response.data)
                    const currentUserRole = response.data?.role || 'employee';
                    console.log('Fetched Role:', currentUserRole);

                    // Step 2: Prepare the payload for the JWT
                    const userPayload = { email: currentUserLogin.email, role: currentUserRole };

                    // Step 3: Send the JWT request
                    const jwtResponse = await axiosPublic.post('/jwt', userPayload, {
                        withCredentials: true,
                    });
                    console.log('JWT Response:', jwtResponse.data);

                    // Complete loading process
                    setLoader(false);
                } catch (error) {
                    console.error('Error fetching user role or generating JWT:', error);
                    setLoader(false);
                }
            }
            else {
                // Step 4: Handle logout if no user is logged in
                try {
                    const logoutResponse = await axiosPublic.post('/logout', {}, {
                        withCredentials: true,
                    });
                    console.log('Logout Response:', logoutResponse.data);
                    setLoader(false);
                } catch (error) {
                    console.error('Error logging out:', error);
                    setLoader(false);
                }
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (currentUserLogin) => {
            handleAuthStateChange(currentUserLogin);
        });

        return () => unsubscribe();
    }, []);



    const info = {
        user,
        setUser,
        currentUser,
        setCurrentUser,
        loader,
        setLoader,
        newUserRegister,
        userLogOut,
        registerUserLogin,
        loginWithGoole,
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <TeamFlowContext.Provider value={info}>
            {children}
        </TeamFlowContext.Provider>
    )

}

export default TeamFlowProvier