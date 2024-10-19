import { AppRegistry, Text, TextInput } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import { store } from "./src/redux/store";

function HeadlessCheck({ isHeadless }) {
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <ReduxApp />;
}

const ReduxApp = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
