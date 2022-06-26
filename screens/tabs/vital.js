import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PageContext } from "../../context";


//it seemed like a good idea at the time...

const Vital = () => {
  const { fire, lists, pointss, vitals } = React.useContext(PageContext);

  const [points, setPoints] = pointss;
  const [vitalsigns, setVitalsigns] = vitals;
  //these are for the top boxes
  const [income, setIncome] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [emergency, setEmergency] = useState(0);

  /* this is for the mood smiles I'm trying to set the variables so that once you
    click a button it shows next to the large text what you pressed i.e. excellent or
    horrible. But, I don't really understand so I'm going to leave this for later.
    It will go hand in hand with saving the data as well.  */
  const [life, setMood1] = useState("");
  const [vision, setMood2] = useState("");
  const [physical, setMood3] = useState("");
  const [mental, setMood4] = useState("");
  const [housing, setMood5] = useState("");
  const [community, setMood6] = useState("");
  const [network, setMood7] = useState("");
  const [job, setMood8] = useState("");
  const [education, setMood9] = useState("");

  // upon saving the data, the user is prompted with an alert that gives them their total
  // score for the smilies only. 9 is the least and 45 is the best.
  const userPrompt = () => {
    if (
      num1 == 0 ||
      num2 == 0 ||
      num3 == 0 ||
      num4 == 0 ||
      num5 == 0 ||
      num6 == 0 ||
      num7 == 0 ||
      num8 == 0 ||
      num9 == 0
    ) {
      alert("Please fill out the missing information");
    } else alert("Nice Job! Your evaluation score is " + total);
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);
  const [num9, setNum9] = useState(0);

  const total = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;

  //this is for the image change onPress. It just changes the source image used to
  //something that tells the user they pressed it

  //Life Group
  const [smile1, setSmile1] = useState(true);
  const [smile2, setSmile2] = useState(true);
  const [smile3, setSmile3] = useState(true);
  const [smile4, setSmile4] = useState(true);
  const [smile5, setSmile5] = useState(true);

  const resetImage = () => {
    setSmile1(require("../../assets/excellent.png"));
    setSmile2(require("../../assets/good.png"));
    setSmile3(require("../../assets/okay.png"));
    setSmile4(require("../../assets/bad.png"));
    setSmile5(require("../../assets/horrible.png")); }

  const imageChange1 = () => {
    setSmile1(); }
  const imageChange2 = () => {
    setSmile2(); }
  const imageChange3 = () => {
    setSmile3(); }
  const imageChange4 = () => {
    setSmile4(); }
  const imageChange5 = () => {
    setSmile5(); }

  //vision group
  const [smile6, setSmile6] = useState(true);
  const [smile7, setSmile7] = useState(true);
  const [smile8, setSmile8] = useState(true);
  const [smile9, setSmile9] = useState(true);
  const [smile10, setSmile10] = useState(true);

  const resetImage2 = () => {
    setSmile6(require("../../assets/excellent.png"));
    setSmile7(require("../../assets/good.png"));
    setSmile8(require("../../assets/okay.png"));
    setSmile9(require("../../assets/bad.png"));
    setSmile10(require("../../assets/horrible.png")); }

  const imageChange6 = () => {
    setSmile6(); }
  const imageChange7 = () => {
    setSmile7(); }
  const imageChange8 = () => {
    setSmile8(); }
  const imageChange9 = () => {
    setSmile9(); }
  const imageChange10 = () => {
    setSmile10(); }

  //physical health
  const [smile11, setSmile11] = useState(true);
  const [smile12, setSmile12] = useState(true);
  const [smile13, setSmile13] = useState(true);
  const [smile14, setSmile14] = useState(true);
  const [smile15, setSmile15] = useState(true);

  const resetImage3 = () => {
    setSmile11(require("../../assets/excellent.png"));
    setSmile12(require("../../assets/good.png"));
    setSmile13(require("../../assets/okay.png"));
    setSmile14(require("../../assets/bad.png"));
    setSmile15(require("../../assets/horrible.png")); }

  const imageChange11 = () => {
    setSmile11(); }
  const imageChange12 = () => {
    setSmile12(); }
  const imageChange13 = () => {
    setSmile13(); }
  const imageChange14 = () => {
    setSmile14(); }
  const imageChange15 = () => {
    setSmile15(); }

  //mental health
  const [smile16, setSmile16] = useState(true);
  const [smile17, setSmile17] = useState(true);
  const [smile18, setSmile18] = useState(true);
  const [smile19, setSmile19] = useState(true);
  const [smile20, setSmile20] = useState(true);

  const resetImage4 = () => {
    setSmile16(require("../../assets/excellent.png"));
    setSmile17(require("../../assets/good.png"));
    setSmile18(require("../../assets/okay.png"));
    setSmile19(require("../../assets/bad.png"));
    setSmile20(require("../../assets/horrible.png")); }

  const imageChange16 = () => {
    setSmile16(); }
  const imageChange17 = () => {
    setSmile17(); }
  const imageChange18 = () => {
    setSmile18(); }
  const imageChange19 = () => {
    setSmile19(); }
  const imageChange20 = () => {
    setSmile20(); }

  //housing
  const [smile21, setSmile21] = useState(true);
  const [smile22, setSmile22] = useState(true);
  const [smile23, setSmile23] = useState(true);
  const [smile24, setSmile24] = useState(true);
  const [smile25, setSmile25] = useState(true);

  const resetImage5 = () => {
    setSmile21(require("../../assets/excellent.png"));
    setSmile22(require("../../assets/good.png"));
    setSmile23(require("../../assets/okay.png"));
    setSmile24(require("../../assets/bad.png"));
    setSmile25(require("../../assets/horrible.png")); }

  const imageChange21 = () => {
    setSmile21(); }
  const imageChange22 = () => {
    setSmile22(); }
  const imageChange23 = () => {
    setSmile23(); }
  const imageChange24 = () => {
    setSmile24(); }
  const imageChange25 = () => {
    setSmile25(); }

  //community
  const [smile26, setSmile26] = useState(true);
  const [smile27, setSmile27] = useState(true);
  const [smile28, setSmile28] = useState(true);
  const [smile29, setSmile29] = useState(true);
  const [smile30, setSmile30] = useState(true);

  const resetImage6 = () => {
    setSmile26(require("../../assets/excellent.png"));
    setSmile27(require("../../assets/good.png"));
    setSmile28(require("../../assets/okay.png"));
    setSmile29(require("../../assets/bad.png"));
    setSmile30(require("../../assets/horrible.png")); }

  const imageChange26 = () => {
    setSmile26(); }
  const imageChange27 = () => {
    setSmile27(); }
  const imageChange28 = () => {
    setSmile28(); }
  const imageChange29 = () => {
    setSmile29(); }
  const imageChange30 = () => {
    setSmile30(); }

  //network
  const [smile31, setSmile31] = useState(true);
  const [smile32, setSmile32] = useState(true);
  const [smile33, setSmile33] = useState(true);
  const [smile34, setSmile34] = useState(true);
  const [smile35, setSmile35] = useState(true);

  const resetImage7 = () => {
    setSmile31(require("../../assets/excellent.png"));
    setSmile32(require("../../assets/good.png"));
    setSmile33(require("../../assets/okay.png"));
    setSmile34(require("../../assets/bad.png"));
    setSmile35(require("../../assets/horrible.png")); }

  const imageChange31 = () => {
    setSmile31(); }
  const imageChange32 = () => {
    setSmile32(); }
  const imageChange33 = () => {
    setSmile33(); }
  const imageChange34 = () => {
    setSmile34(); }
  const imageChange35 = () => {
    setSmile35(); }

  //job
  const [smile36, setSmile36] = useState(true);
  const [smile37, setSmile37] = useState(true);
  const [smile38, setSmile38] = useState(true);
  const [smile39, setSmile39] = useState(true);
  const [smile40, setSmile40] = useState(true);

  const resetImage8 = () => {
    setSmile36(require("../../assets/excellent.png"));
    setSmile37(require("../../assets/good.png"));
    setSmile38(require("../../assets/okay.png"));
    setSmile39(require("../../assets/bad.png"));
    setSmile40(require("../../assets/horrible.png")); }

  const imageChange36 = () => {
    setSmile36(); }
  const imageChange37 = () => {
    setSmile37(); }
  const imageChange38 = () => {
    setSmile38(); }
  const imageChange39 = () => {
    setSmile39(); }
  const imageChange40 = () => {
    setSmile40(); }

  //education
  const [smile41, setSmile41] = useState(true);
  const [smile42, setSmile42] = useState(true);
  const [smile43, setSmile43] = useState(true);
  const [smile44, setSmile44] = useState(true);
  const [smile45, setSmile45] = useState(true);

  const resetImage9 = () => {
    setSmile41(require("../../assets/excellent.png"));
    setSmile42(require("../../assets/good.png"));
    setSmile43(require("../../assets/okay.png"));
    setSmile44(require("../../assets/bad.png"));
    setSmile45(require("../../assets/horrible.png")); }

  const imageChange41 = () => {
    setSmile41(); }
  const imageChange42 = () => {
    setSmile42(); }
  const imageChange43 = () => {
    setSmile43(); }
  const imageChange44 = () => {
    setSmile44(); }
  const imageChange45 = () => {
    setSmile45(); }


  //the next three functions are for the likert scale. background is the button color
  //where reset makes sure no two buttons are colored at the same time
  //and change color lets the background color change when each button is triggered
  //the information is stored in variable likert which is saved using the same process as the smilies
  const [background1, setBackground1] = useState(true);
  const [background2, setBackground2] = useState(true);
  const [background3, setBackground3] = useState(true);
  const [background4, setBackground4] = useState(true);
  const [background5, setBackground5] = useState(true);

  const reset = () => {
    setBackground1("white");
    setBackground2("white");
    setBackground3("white");
    setBackground4("white");
    setBackground5("white"); };

  const colorChange1 = () => {
    setBackground1();
    setLikert("Excellent");
  };
  const colorChange2 = () => {
    setBackground2();
    setLikert("Good");
  };
  const colorChange3 = () => {
    setBackground3();
    setLikert("Okay");
  };
  const colorChange4 = () => {
    setBackground4();
    setLikert("Bad");
  };
  const colorChange5 = () => {
    setBackground5();
    setLikert("Horrible");
  };

  const [likert, setLikert] = useState("");

  const [edu, setEducation] = useState([]);
  const [employ, setEmployment] = useState([]);
  const [fin, setFinancial] = useState([]);
  const [health, setHealthcare] = useState([]);
  const [house, setHousing] = useState([]);

  const TaskData = (item) => {
    let completed = item.tasks
      .filter((task) => task.type == "system")
      .filter((task) => task.complete).length;
    let length = lists[0].tasks.filter((task) => task.type == "system").length;
    return [completed, length];
  };

  useEffect(() => {
    setEducation(TaskData(lists[0]));
    setEmployment(TaskData(lists[1]));
    setFinancial(TaskData(lists[2]));
    setHealthcare(TaskData(lists[3]));
    setHousing(TaskData(lists[4]));
  }, [lists]);

  const saveData = () => {
    if (vitalsigns < 1) {
      setPoints(points + 100);
      fire.updatePoints({
        userPoints: points + 100,
      });
    }
    fire.addVitalsign({
      createdAt: fire.timeStamp,
      income: income,
      emergency: emergency,
      creditScore: creditScore,
      life: life,
      vision: vision,
      physical: physical,
      mental: mental,
      housing: housing,
      community: community,
      network: network,
      job: job,
      education: education,
      total: total,
      likert: likert,
      eduTasks: edu,
      // eduSteps: ,
      employTasks: employ,
      // employSteps: ,
      finTasks: fin,
      // finSteps: ,
      healthTasks: health,
      // healthSteps ,
      housingTasks: house,
      // housingSteps: ,
      points: points,
    });
    userPrompt();
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ padding: 10, fontSize: 25, fontWeight: "bold" }}>
          Financial
        </Text>
      </View>
      <View style={[styles.container, { bottom: 15 }]}>
        {/* multiline makes it so that everything wraps
            numeric makes the num pad come up on click
            placeholder is the gray text inside the box that gets replaced
            onChangeText updates the values to be used at the bottom */}
        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Monthly Income"
          onChangeText={(val) => setIncome(Number(val))}
          maxLength={16}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Credit Score"
          onChangeText={(val) => setCreditScore(Number(val))}
          maxLength={3}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Emergency Funds"
          onChangeText={(val) => setEmergency(Number(val))}
          maxLength={16}
        />
      </View>

      {/* likert scale */}
      <Text style={{ fontSize: 20, bottom: 20, left: 8 }}>
        {"\n"}Overall Confidence in my Financial Situation:
      </Text>
      <View style={{ flexDirection: "row", left: 5 }}>
        <TouchableOpacity
          style={[
            styles.likert,
            {
              left: 20,
              bottom: 13,
              backgroundColor: background1 ? "white" : "black",
            },
          ]}
          onPressIn={reset}
          onPress={colorChange1 || setLikert("Excellent")}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.likert,
            {
              left: 80,
              bottom: 13,
              backgroundColor: background2 ? "white" : "black",
            },
          ]}
          onPressIn={reset}
          onPress={colorChange2 || setLikert("Good")}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.likert,
            {
              left: 140,
              bottom: 13,
              backgroundColor: background3 ? "white" : "black",
            },
          ]}
          onPressIn={reset}
          onPress={colorChange3 || setLikert("Okay")}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.likert,
            {
              left: 200,
              bottom: 13,
              backgroundColor: background4 ? "white" : "black",
            },
          ]}
          onPressIn={reset}
          onPress={colorChange4 || setLikert("Bad")}
        ></TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.likert,
            {
              left: 260,
              bottom: 13,
              backgroundColor: background5 ? "white" : "black",
            },
          ]}
          onPressIn={reset}
          onPress={colorChange5 || setLikert("Horrible")}
        ></TouchableOpacity>
      </View>

      {/* likert confidence scale words for financial */}
      <Text style={{ fontSize: 15, left: 7, bottom: 10 }}>
        Excellent
      </Text>
      <Text style={{ fontSize: 15, left: 188, bottom: 30 }}>
        Okay
      </Text>
      <Text style={{ fontSize: 15, left: 345, bottom: 50 }}>
        Horrible
      </Text>

      <View>
        {/* these are the values that are just printed out under the grid.
            basically we replace {income} with the previous database value
            and cruise like that. removed since no update*/}
        {/* <View style={{top:7}}>
          <Text style={[styles.text, {position: 'absolute', bottom: 252}]}>
            {" "}
            Previous Income: ${income}
          </Text>
          <Text style={[styles.text, {position: 'absolute', bottom: 197}]}>
            {" "}
            Previous Credit Score: {creditScore}
          </Text>
          <Text style={[styles.text, {position: 'absolute', bottom: 140}]}>
            {" "}
            Previous EF: ${emergency}
          </Text>
        </View> */}

        {/* start of the smiles page. Everything is its own button so it is a bit of a mess */}
        <Text style={styles.text2}>How I feel about my... </Text>
        {/* life */}
        <Text style={{ fontSize: 20, left: 10 }}>Life: {life}</Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage}
            onPress={() => {
              setMood1("Excellent");
              setNum1(5);
              imageChange1();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile1 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage}
            onPress={() => {
              setMood1("Good");
              setNum1(4);
              imageChange2();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile2 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage}
            onPress={() => {
              setMood1("Okay");
              setNum1(3);
              imageChange3();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile3 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage}
            onPress={() => {
              setMood1("Bad");
              setNum1(2);
              imageChange4();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile4 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage}
            onPress={() => {
              setMood1("Horrible");
              setNum1(1);
              imageChange5();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile5 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* vision of self */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Vision of Self: {vision}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage2}
            onPress={() => {
              setMood2("Excellent");
              setNum2(5);
              imageChange6();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile6 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage2}
            onPress={() => {
              setMood2("Good");
              setNum2(4);
              imageChange7();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile7 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage2}
            onPress={() => {
              setMood2("Okay");
              setNum2(3);
              imageChange8();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile8 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage2}
            onPress={() => {
              setMood2("Bad");
              setNum2(2);
              imageChange9();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile9 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage2}
            onPress={() => {
              setMood2("Horrible");
              setNum2(1);
              imageChange10();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile10 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* physical health */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Physical Health: {physical}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage3}
            onPress={() => {
              setMood3("Excellent");
              setNum3(5);
              imageChange11();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile11 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage3}
            onPress={() => {
              setMood3("Good");
              setNum3(4);
              imageChange12();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile12 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage3}
            onPress={() => {
              setMood3("Okay");
              setNum3(3);
              imageChange13();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile13 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage3}
            onPress={() => {
              setMood3("Bad");
              setNum3(2);
              imageChange14();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile14 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage3}
            onPress={() => {
              setMood3("Horrible");
              setNum3(1);
              imageChange15();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile15 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* mental health */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Mental Health: {mental}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage4}
            onPress={() => {
              setMood4("Excellent");
              setNum4(5);
              imageChange16();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile16 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage4}
            onPress={() => {
              setMood4("Good");
              setNum4(4);
              imageChange17();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile17 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage4}
            onPress={() => {
              setMood4("Okay");
              setNum4(3);
              imageChange18();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile18 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage4}
            onPress={() => {
              setMood4("Bad");
              setNum4(2);
              imageChange19();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile19 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage4}
            onPress={() => {
              setMood4("Horrible");
              setNum4(1);
              imageChange20();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile20 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* housing */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Housing: {housing}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage5}
            onPress={() => {
              setMood5("Excellent");
              setNum5(5);
              imageChange21();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile21 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage5}
            onPress={() => {
              setMood5("Good");
              setNum5(4);
              imageChange22();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile22 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage5}
            onPress={() => {
              setMood5("Okay");
              setNum5(3);
              imageChange23();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile23 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage5}
            onPress={() => {
              setMood5("Bad");
              setNum5(2);
              imageChange24();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile24 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage5}
            onPress={() => {
              setMood5("Horrible");
              setNum5(1);
              imageChange25();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile25 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* community */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Community: {community}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage6}
            onPress={() => {
              setMood6("Excellent");
              setNum6(5);
              imageChange26();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile26 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage6}
            onPress={() => {
              setMood6("Good");
              setNum6(4);
              imageChange27();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile27 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage6}
            onPress={() => {
              setMood6("Okay");
              setNum6(3);
              imageChange28();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile28 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage6}
            onPress={() => {
              setMood6("Bad");
              setNum6(2);
              imageChange29();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile29 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage6}
            onPress={() => {
              setMood6("Horrible");
              setNum6(1);
              imageChange30();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile30 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* network */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Network: {network}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage7}
            onPress={() => {
              setMood7("Excellent");
              setNum7(5);
              imageChange31();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile31 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage7}
            onPress={() => {
              setMood7("Good");
              setNum7(4);
              imageChange32();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile32 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage7}
            onPress={() => {
              setMood7("Okay");
              setNum7(3);
              imageChange33();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile33 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage7}
            onPress={() => {
              setMood7("Bad");
              setNum7(2);
              imageChange34();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile34 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage7}
            onPress={() => {
              setMood7("Horrible");
              setNum7(1);
              imageChange35();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile35 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* job */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Job/Career: {job}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage8}
            onPress={() => {
              setMood8("Excellent");
              setNum8(5);
              imageChange36();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile36 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage8}
            onPress={() => {
              setMood8("Good");
              setNum8(4);
              imageChange37();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile37 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage8}
            onPress={() => {
              setMood8("Okay");
              setNum8(3);
              imageChange38();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile38 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage8}
            onPress={() => {
              setMood8("Bad");
              setNum8(2);
              imageChange39();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile39 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage8}
            onPress={() => {
              setMood8("Horrible");
              setNum8(1);
              imageChange40();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile40 ? require("../../assets/horrible.png") : require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>

        {/* education */}
        <Text style={{ fontSize: 20, left: 10 }}>
          {"\n"}Education/Training: {education}
        </Text>
        <View style={styles.pictures}>
          <TouchableOpacity
            onPressIn={resetImage9}
            onPress={() => {
              setMood9("Excellent");
              setNum9(5);
              imageChange41();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile41 ? require("../../assets/excellent.png") : require("../../assets/excellentPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage9}
            onPress={() => {
              setMood9("Good");
              setNum9(4);
              imageChange42();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile42 ? require("../../assets/good.png") : require("../../assets/goodPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage9}
            onPress={() => {
              setMood9("Okay");
              setNum9(3);
              imageChange43();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile43 ? require("../../assets/okay.png") : require("../../assets/okayPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage9}
            onPress={() => {
              setMood9("Bad");
              setNum9(2);
              imageChange44();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile44 ? require("../../assets/bad.png") : require("../../assets/badPress.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPressIn={resetImage9}
            onPress={() => {
              setMood9("Horrible");
              setNum9(1);
              imageChange45();
            }}
          >
            <Image
              style={{ width: 75, height: 70 }}
              resizeMode="contain"
              source={smile45 ? require("../../assets/horrible.png") :  require("../../assets/horriblePress.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* save data */}
      <TouchableOpacity
        style={[styles.button, { alignItems: "center", left: 130, top: 15 }]}
        onPress={saveData}
      >
        <Text style={{ color: "white" }}>SAVE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Vital;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 350,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: 10,
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: 150,
  },
  text: {
    left: 170,
  },
  text2: {
    left: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  pictures: {
    left: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  likert: {
    width: 10,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
  },
});