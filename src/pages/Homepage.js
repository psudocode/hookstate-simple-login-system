import { logout, useAuthState } from "../stores/AuthStore";

export const Homepage = () => {
  const authState = useAuthState();
  return (
    <div>
      <p>
        Hi, {authState.me.get().name}! <br /> Welcome to our homepage
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Homepage;
