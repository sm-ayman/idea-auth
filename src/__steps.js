/*
-------------------------
BASIC CONTEXT API Setup
-------------------------
    1. Context API: Share auth state with other components(acceoss the application)
    2. Createan UserContext
    3. ContextProvider with passed children
    4. Set the UserContext in index.js
    5. To consume the context: export the AuthContext from UserContext
    6. Now at Header or anywhere else(in any component): use  userContext hook to get the info in the context
*/


/*
Auth Integration
    1. use getAuth by passing the app firebase config
    2. create a function named createUser to return createUserWithEmailAndPassword
*/