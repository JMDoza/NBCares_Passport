import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { PageContext } from "../context";
import Reports from "../components/Reports";
import FloatingButtonf from "../components/FloatingButtonf";
import { LinearGradient } from "expo-linear-gradient";
import {ReportingText} from "../InfoText.js";

let initialRender = true;
const HomeScreen = () => {
  // These variables can be considered 'global' to any file that is under the context provider in the root file
  const { fire, authen, lists } = React.useContext(PageContext);
  const [authID, setAuthID] = authen;
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  // Sets the authID useState to the user ID from firebase, this then allows the useEffect in App.js to trigger
  // and retieve the lists and user points
  useEffect(() => {
    setAuthID(fire.userID);
  }, []);

  // This useEffect triggers when the useState 'lists' changes, when it changes the loading state to false
  // so that the activity indicator is disabled and shows the content of the screen when loaded
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
    } else {
      setLoading(false);
    }
  }, [lists]);

  const handleVital = () => {
    navigation.navigate("Vital Signs");
  };

  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  };

  // If loading is true then display activity indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={"#af272f"} />
      </View>
    );
  }

  // these functions is to toggle the center button. it will be the animation
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{ReportingText}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>I Understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <LinearGradient
        // Background Linear Gradient
        colors={["#d0c49a", "#ffffff"]}
        locations={[0.5, 1]}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />
      <FloatingButtonf />
      <Reports />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 200,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#af272f",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
