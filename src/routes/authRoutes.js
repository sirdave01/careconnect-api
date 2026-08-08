// =======================================
// Authentication Routes
// =======================================
// Defines authentication endpoints for
// Google OAuth using Passport.
// =======================================

import { Router } from "express";

import passport from "passport";

const router = Router();


// =======================================
// Google OAuth Login
// =======================================
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Start Google OAuth login'
    #swagger.description = 'Redirects the browser to Google. Do not use "Try it out" – open the URL in a new tab instead.'
    #swagger.responses[302] = { description: 'Redirect to Google' }
*/

router.get(
    "/google",
    passport.authenticate(
        "google",
        {
            scope: [
                "profile",
                "email"
            ]
        }
    )
);


// =======================================
// Google OAuth Callback
// =======================================
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Google OAuth callback'
    #swagger.description = 'Handles the callback from Google after successful authentication.'
*/

router.get(
    "/google/callback",

    passport.authenticate(
        "google",
        {
            failureRedirect: "/login",
            failureMessage: true
        }
    ),

    (req, res) => {

        // Authentication succeeded.

        res.redirect("/");

    }
);


// =======================================
// Logout
// =======================================
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Logout current user'
    #swagger.description = 'Destroys the current Passport session.'
*/

router.get(
    "/logout",
    (req, res) => {

        req.logout((error) => {

            if (error) {

                return res.status(500).json({

                    success: false,

                    message:
                        "Logout failed"

                });

            }

            req.session.destroy(() => {

                res.json({

                    success: true,

                    message:
                        "Successfully logged out"

                });

            });

        });

    }
);


// =======================================
// Current Authenticated User
// =======================================
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Get current authenticated user'
    #swagger.description = 'Returns the currently logged-in user or 401 if not authenticated.'
    #swagger.security = [{
        sessionAuth: []
    }]
*/

router.get(
    "/me",
    (req, res) => {

        if (!req.isAuthenticated()) {

            return res.status(401).json({

                success: false,

                message:
                    "Not authenticated"

            });

        }

        return res.json({

            success: true,

            data: req.user

        });

    }
);


export default router;