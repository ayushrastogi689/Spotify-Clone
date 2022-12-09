const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login" , (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({

        redirectUri: "http://localhost:3005",
        clientId: "b20f7d70e4914222ae93f73f6e79fb1d",
        clientSecret: "ee033397589a4756b72329eafdbed70a"
    })

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(() => {
        res.sendStatus(400)
    })

})