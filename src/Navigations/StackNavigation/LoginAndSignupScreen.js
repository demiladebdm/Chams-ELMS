import Login_And_Signup from "../../Sections/LoginAndSignup/Login_And_Signup";
import ConfirmEmail from "../../Sections/LoginAndSignup/Signup/ConfirmEmail";
import Verified from "../../Sections/LoginAndSignup/Signup/Verified";
import RecoverPassword from "../../Sections/LoginAndSignup/PasswordRecovery.js/RecoverPassword";
import PasswordReset from "../../Sections/LoginAndSignup/PasswordRecovery.js/PasswordRecovery";
import RecoverPasswordViaReset from "../../Sections/LoginAndSignup/PasswordRecovery.js/RecoverPaswordViaReset";
import ResetSuccess from "../../Sections/LoginAndSignup/PasswordRecovery.js/ResetSuccess";
import ForgotPassword from "../../Sections/LoginAndSignup/PasswordRecovery.js/ForgotPassword";

const LoginAndSignupScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Login and Signup"
        options={{ headerShown: false }}
        component={Login_And_Signup}
      />
      <Stack.Screen
        name="Confirm Email"
        options={{ headerShown: false }}
        component={ConfirmEmail}
      />
      <Stack.Screen
        name="Verified"
        options={{ headerShown: false }}
        component={Verified}
      />
      <Stack.Screen
        name="Recover Password"
        options={{ headerShown: false }}
        component={RecoverPassword}
      />
      <Stack.Screen
        name="Forgot Password"
        options={{ headerShown: false }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="Reset Password"
        options={{ headerShown: false }}
        component={PasswordReset}
      />
      <Stack.Screen
        name="Reset Password Via Reset"
        options={{ headerShown: false }}
        component={RecoverPasswordViaReset}
      />
      <Stack.Screen
        name="Password Reset Successful"
        options={{ headerShown: false }}
        component={ResetSuccess}
      />
    </>
  );
};

export default LoginAndSignupScreen;
