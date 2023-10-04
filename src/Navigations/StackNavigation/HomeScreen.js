import Home from "../TabNavigation/Home";

const HomeScreen = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </>
  );
};

export default HomeScreen;
