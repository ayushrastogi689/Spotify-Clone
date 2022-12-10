import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b20f7d70e4914222ae93f73f6e79fb1d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

// client_id = b20f7d70e4914222ae93f73f6e79fb1d

export default function Login() {
  return (
    <div>
        <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  )
}
