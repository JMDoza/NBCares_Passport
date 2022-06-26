import { Text, StyleSheet } from "react-native";
const InfoText = (
  <Text>
    <Text style={{ fontWeight: "bold" }}>Education (Top left):</Text> whether
    it’s high school, college, or job training, getting an education is the
    surest path to social mobility.{"\n"}
    {"\n"}
    <Text style={{ fontWeight: "bold" }}>Employment(Top right):</Text> you spend
    a third of your time at work. You might as well like what you’re doing. Here
    are the steps.{"\n"}
    {"\n"}
    <Text style={{ fontWeight: "bold" }}>Financial (Bottom left):</Text> good
    credit makes a difference. Working with a financial coach is what rich
    people do, why not you?{"\n"}
    {"\n"} <Text style={{ fontWeight: "bold" }}>Healthcare (Bottom):</Text> your
    health is your wealth. Preventative care keeps you healthy.
    {"\n"}
    {"\n"} <Text style={{ fontWeight: "bold" }}>Housing (Bottom right):</Text>{" "}
    obtaining housing is a process that may take a while. Here are the steps.
  </Text>
);

const ReportingText = (
  <Text>
    <Text style={{ fontSize: 16 }}>
      Welcome to your{" "}
      <Text style={{ fontWeight: "bold" }}>Social Health Passport!</Text>
      {"\n"}
      {"\n"}
    </Text>
    Please read these instructions very carefully pertaining to your{" "}
    <Text style={{ fontWeight: "bold" }}>self-sufficiency score:</Text>
    {"\n"}
    {"\n"} <Text style={{ fontWeight: "bold" }}>(1)</Text> As you accomplish
    objectives within the Employment, Healthcare, Financial Literacy, Housing,
    and Education tasks please be sure to check off the appropriate box
    associated with whichever objective you feel as though you have
    accomplished.{"\n"}
    {"\n"} <Text style={{ fontWeight: "bold" }}>(2)</Text> Please do not check
    boxes for objectives you have not completed yet. When you initially check
    off the objective box for any given accomplished objective, your score will
    not go up... <Text style={{ fontWeight: "bold" }}>yet!</Text>
    {"\n"}
    {"\n"} <Text style={{ fontWeight: "bold" }}>(3)</Text> You will meet with a
    member of the Social Health Passport team{" "}
    <Text style={{ fontWeight: "bold" }}>bimonthly</Text> to verify the
    objective that you have checked off has been sufficiently completed. After
    the meeting, the team member will{" "}
    <Text style={{ fontWeight: "bold" }}>unlock the points</Text> you have
    accrued and they will be{" "}
    <Text style={{ fontWeight: "bold" }}>allocated to your profile.</Text> You
    will not need to do this for any personal objectives you create within a
    task, as user created objectives do not accrue points towards your self
    sufficiency score
  </Text>
);

export { InfoText, ReportingText };
