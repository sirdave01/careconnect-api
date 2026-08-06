// =======================================
// Passport Configuration
// =======================================
// Handles OAuth authentication
// using Google Strategy.
// =======================================


import passport from "passport";


import {
    Strategy as GoogleStrategy
} from "passport-google-oauth20";



import {
    findUserByEmail,
    createUser
} from "../repositories/userRepository.js";





// =======================================
// Serialize User
// =======================================
// Saves user identifier into session.
// =======================================


passport.serializeUser(

    (user, done)=>{


        done(

            null,

            user._id

        );


    }

);





// =======================================
// Deserialize User
// =======================================
// Retrieves user from session.
// =======================================


passport.deserializeUser(

    async(id, done)=>{


        try{


            const user = {

                _id:id

            };


            done(

                null,

                user

            );


        }

        catch(error){


            done(

                error,

                null

            );


        }


    }

);





// =======================================
// Google OAuth Strategy
// =======================================


passport.use(

    new GoogleStrategy(


        {


            clientID:

                process.env.GOOGLE_CLIENT_ID,



            clientSecret:

                process.env.GOOGLE_CLIENT_SECRET,



            callbackURL:

                process.env.GOOGLE_CALLBACK_URL_LOCAL



        },



        async(

            accessToken,

            refreshToken,

            profile,

            done

        )=>{


            try{


                // Check if user already exists

                let user =

                    await findUserByEmail(

                        profile.emails[0].value

                    );





                // Create user if new

                if(!user){


                    user =

                        await createUser({


                            firstName:

                                profile.name.givenName,



                            lastName:

                                profile.name.familyName,



                            email:

                                profile.emails[0].value,



                            googleId:

                                profile.id,



                            provider:

                                "google",



                            role:

                                "patient"


                        });


                }





                return done(

                    null,

                    user

                );


            }


            catch(error){


                return done(

                    error,

                    null

                );


            }


        }


    )

);