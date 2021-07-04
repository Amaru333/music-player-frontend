import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URI =
  "https://accounts.spotify.com/authorize?client_id=7df5f892cd4d4296a2bc5dacf6e27870&response_type=code&redirect_uri=https://amaru-music-player.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URI}>
        Login with Spotify
      </a>
    </Container>
  );
}
