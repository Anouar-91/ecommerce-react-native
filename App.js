import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './screens/Landing';
/*  import store from './reduxToolkit/redux' */
import AppNav from './routes/AppNav'
export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
