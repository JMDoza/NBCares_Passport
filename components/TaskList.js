import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { PageContext, PageContext2 } from "../context";
import { useNavigation } from "@react-navigation/native";


const TaskList = ({ task, index, listID, drag, isActive }) => {
  // showList displays Modal if set to true
  // refresh updatees the TaskList if a value in its array changes
  const { fire, lists, pointss, refreshs } = React.useContext(PageContext);
  const { listTest } = React.useContext(PageContext2);
  const [refresh, setRefresh] = refreshs;
  const [points, setPoints] = pointss;
  // const list = lists[listID];
  const [list, setList] = listTest

  const navigation = useNavigation();
  // const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={1}
  //       onLongPress={drag}
  //       disabled={isActive}
  //       style={[
  //         styles.rowItem,
  //         { backgroundColor: isActive ? "red" : item.backgroundColor },
  //       ]}
  //     >
  //       <Text style={styles.text}>{item.text}</Text>
  //     </TouchableOpacity>
  // );
  // }

  useEffect(() => {
    navigation.setOptions({
      title: list.name,
    });
  }, []);

  // This toggles the Completed Boolean of the array item then updates the TaskList
  const toggleCompleted = (item) => {
    // console.log("TOGGLED UPDATED \n")
    if (item.completed && item.type != "system") {
      item.complete = !item.complete;
      fire.updateList(list);
    }

    if (!item.complete && !item.completed) {
      console.log(item.locked)
      if(item.locked) {
        Alert.alert("Wait!", "You cannot complete this task yet");
      }
      else if (item.type == "system") {
        Alert.alert(
          "Complete: " + [item.title] + "?",
          "You will not be able to uncomplete this task",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                fire.refUser.get().then((doc) => {
                  if (
                    new Date().getTime() >
                    new Date(doc.data().lastLogin.toDate()).getTime()
                  ) {
                    list.next().locked = false;
                    add_completeTask(item);
                  } else {
                    Alert.alert("ERROR:", "System Date & Time is not synced with server, could not complete task.", [
                      {
                        text: "OK",
                        onPress: () => {},
                      },
                    ]);
                  }
                });
              },
            },
          ]
        );
      } else {
        add_completeTask(item);
      }
    }

    //setRefresh(!refresh);
  };

  const add_completeTask = (item) => {
    setPoints(points + item.points);
    fire.updatePoints({
      userPoints: points + item.points,
    });
    item.complete = true;
    item.completed = true;
    item.date = new Date();



    var test1 = new Date();

    var test2 = null;

    console.log("TESTING DATES ", new Date(test1).toDateString())

    // fire.refUser.get().then((doc) => {
    //   test2 = new Date(doc.data().lastLogin.toDate())
    //   console.log("dafasdf ", new Date(doc.data().lastLogin.toDate()).getTime())
    //   // if (test1.getTime() > test2.getTime()) {
    //   //   console.log("TREUUUUUUUUUUUU")
    //   // } else {{
    //   //   console.log("FLASSEE")
    //   // }}
    // });

    // console.log(new Date().getTime())

    fire.updateList(list);
  };

  const deleteTask = (index) => {
    list.tasks.splice(index, 1);
    fire.updateList(list);
    //setRefresh(!refresh);
  };

  const rightActions = (dragX, index) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: "clamp",
    });

    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: "clamp",
    });

    const radi = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [10, 7.5, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity 
        onPress={() => deleteTask(index)}>
        <Animated.View
          style={[
            styles.deleteButton,
            {
              opacity: opacity,
              borderBottomRightRadius: radi,
              borderTopRightRadius: radi,
            },
          ]}
        >
          <Animated.Text
            style={{
              color: "white",
              fontWeight: "bold",
              transform: [{ scale }],
            }}
          >
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const Task = () => {
    console.log("SHOWING TASK: ", task.date)
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.taskContainer,
            { backgroundColor: isActive ? "red" : "#c6b886" },
            { backgroundColor: task.complete ? "#ded6ba" : "#c6b886" }, 
            
          ]}
          onLongPress={task.type == "system" ? null : drag}
          onPress={() => {
            navigation.navigate("Steps", {
              index: index,
              listID: listID,
            });
          }}
          isActive={isActive}
          // onPress={() => setShowList(!showList)}
          // activeOpacity={0.8}
        >
          <TouchableOpacity onPress={() => toggleCompleted(task)}>
            <Ionicons
              name={task.complete ? "ios-checkbox-outline" : "ios-square"}
              size={35}
              color={"white"}
              style={{ width: 40 }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={[
                styles.task,
                {
                  //textDecorationLine: task.complete ? "line-through" : "none",
                  color: task.complete ? "grey" : "white",
                },
              ]}
            >
              {task.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.taskSubText,
                  { color: task.complete ? "#969696" : "#e8e8e8" },
                ]}
              >
                Type: {task.type}
              </Text>
              {task.steps.length > 0 ? (
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      styles.taskSubText,
                      {
                        paddingHorizontal: 10,
                        color: task.complete ? "#969696" : "#e8e8e8",
                      },
                    ]}
                  >
                    ||
                  </Text>
                  <Text
                    style={[
                      styles.taskSubText,
                      { color: task.complete ? "#969696" : "#e8e8e8" },
                    ]}
                  >
                    {task.steps.filter((step) => step.complete).length} of{" "}
                    {task.steps.length}
                  </Text>
                </View>
              ) : null}

              {task.complete ? (
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={[
                      styles.taskSubText,
                      {
                        paddingHorizontal: 10,
                        color: task.complete ? "#969696" : "#e8e8e8",
                      },
                    ]}
                  >
                    ||
                  </Text>
                  <Text
                    style={[
                      styles.taskSubText,
                      { color: task.complete ? "#969696" : "#e8e8e8" },
                    ]}
                  >
                    {/* {task.date === 'object' ? new Date(task.date.getTime()).toDateString() : new Date(task.date.toDate()).toDateString() } */}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (task.type == "system") {
    return <Task />;
  } else {
    return (
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, index)}>
        <Task />
      </Swipeable>
    );
  }
};

export default TaskList;

const styles = StyleSheet.create({
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
