import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createDrawerNavigator } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  const Drawer = createDrawerNavigator();

  const { fire, pointss, namee } = React.useContext(PageContext);
  const navigation = useNavigation();
  const [points, setPoints] = pointss;
  const [name, setName] = namee;

  const onAboutUsPress = () => {
    navigation.navigate("About Us");
  };

  const handleSignOut = () => {
    fire.detach();
    fire.auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#c5b358" }}
      >
        <ImageBackground
          source={require("../assets/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {name}
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "#fff",
                marginRight: 5,
                fontSize: 18,
                bottom: 20
              }}>
              {"Your self-sufficiency score is"}
            </Text>
            <Text
              style={{
                color: "#fff",
                marginRight: 5,
                fontSize: 50,
                bottom: 9,
                textAlign: "center",
              }}>
              {points + "!"}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
      <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://youtu.be/fMRXHfrs3y8")
          }
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="logo-youtube" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Tutorial
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://jmkryzanski.pythonanywhere.com")
          }
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="globe-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Our Website
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
