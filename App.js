import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/Navigations/AppNav";

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </>
  );
}
