import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Plus...
import plus from '../assets/plus.png';

// Font Awesome Icons...
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {useRef} from 'react';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // Floating Tab Bar...
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 60,
            marginHorizontal: 20,
            // Max Height...
            height: 70,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                }}>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? 'red' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name={'Search'}
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                }}>
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? 'red' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name={'Empty'}
          component={EmptyScreen}
          options={({ navigation })=>({
            tabBarIcon: () => (
              <TouchableOpacity
               onPress={()=>navigation.navigate('Empty')}
              >
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: 'red',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS == 'android' ? 50 : 30,
                  }}>
                  <Image
                    source={plus}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: 'white',
                    }}></Image>
                </View>
              </TouchableOpacity>
            ),
          })}></Tab.Screen>

        <Tab.Screen
          name={'Notifications'}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                }}>
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? 'red' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                }}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? 'red' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 50,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

function EmptyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtColor}>Plus Screen!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtColor}>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtColor}>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtColor}>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.txtColor}>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtColor: {
    color: 'blue',
  },
});
