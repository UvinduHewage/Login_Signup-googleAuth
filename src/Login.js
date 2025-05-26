import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "./firebase";

const Login = () => {
  const handleLogin = async () => {
    try {
      // Add these provider settings
      provider.setCustomParameters({
        prompt: "select_account"
      });
      
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
      console.log("User:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
