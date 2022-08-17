import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TaskList from "./TaskList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PageContext, PageContext2 } from "../context";
import AddModal from "./AddModal";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";

export default TabRender = ({ listID }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fire, pointss, lists, refreshs } = React.useContext(PageContext);

  const [refresh, setRefresh] = refreshs;
  const [points, setPoints] = pointss;
  const [list, setList] = useState(lists[listID]);
  const [tasks, setTasks] = useState(list.tasks);

  // ({ item, index }) => (
  //   <TaskList task={item} index={index} listID={listID} />
  // )

  useEffect(() => {
    console.log("UPDATED");
    fire.updateList(list);
  }, [list]);

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TaskList
        task={item}
        index={index}
        listID={listID}
        drag={drag}
        isActive={isActive}
      />
      //<Task item={item} index={index} drag={drag} isActive={isActive} />
    );
  };

  // const test = (data) => {
  //   let updatedList = list.tasks.map((item) => {
  //     return { ...item, tasks: data };
  //   });
  //   // console.log("////////////////////////////////////////////////////////")
  //   // console.log("Updated Tasks: /n", updatedList)

  //   setList(prev => ({
  //     ...prev,
  //     tasks: data}))
  //   console.log(/
  // };

  return (
    <PageContext2.Provider value={{ listTest: [list, setList] }}>
      <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#efebdc", "#ffffff"]}
          end={{ x: 0, y: 1 }}
          style={styles.background}
        />

        <AddModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          listID={listID}
          type="task"
        />

        {/* <Text style={{ fontSize: 25 }}>itemId: {list.name} </Text> */}

        {/* <FlatList
        data={list.tasks}
        renderItem={({ item, index }) => (
          <TaskList task={item} index={index} listID={listID} />
        )}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 16,
          paddingBottom: 62,
        }}
        // keyboardShouldPersistTaps="handled"
        extraData={refresh}
      /> */}

        <DraggableFlatList
          data={list.tasks}
          onDragEnd={({ data }) => {
            // console.log("List Before: \n", list)
            // console.log("Data: \n", data)
            setList((prev) => ({
              ...prev,
              tasks: data,
            }));
            // setRefresh(!refresh)
          }}
          // onRefresh={refresh}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 16,
            paddingBottom: 62,
          }}
        />

        <View style={[styles.section, styles.footer]}>
          <TouchableOpacity
            style={[
              styles.addTodo,
              { backgroundColor: "#b4a25f", opacity: 0.9 },
            ]}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="plus" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    </PageContext2.Provider>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignSelf: "flex-end",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 4,
    borderRadius: 10,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 30,
    padding: 12,
    position: "absolute",
    bottom: 10,
    //opacity: 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    fontWeight: "700",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  test: {
    flexDirection: "column",
  },
  color1: {
    color: "#555555",
  },
  color2: {
    color: "#000000",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  taskContainer: {
    marginBottom: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    fontWeight: "bold",
    fontSize: 18,
  },
  taskSubText: {
    color: "#e8e8e8",
    fontWeight: "700",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    marginBottom: 5,
  },
});
