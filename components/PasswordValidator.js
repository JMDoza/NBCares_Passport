import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, TextInput, Button} from 'react-native';

export default class ChangePasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",               // to store password
            passwordErrorMessage: "",         // password error message
            loading: false,             // manage loader
        }
    }
    /**
     * authenticate user
     */
    formValidation = async () => {
        this.setState({ loading: true })
        let errorFlag = false;
        
        // input validation
        if (this.state.password.length == 0) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password is required feild"});
        } else if (this.state.password.length < 8 ||  this.state.password.length > 20) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password should be at least 8 characters long"});
        }
       
        if (errorFlag) {
            console.log("errorFlag");
            
            /** Call Your API */
        } else {
            this.setState({ loading: false });
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.LoginLayout}>
                        <View style={styles.LogoLayout}>
                            <Text>{"Change Password"}</Text>
                        </View>
                        <View style={styles.inputLayout}>
                            <TextInput
                                placeholder="Password"
                                value={this.state.password}
                                secureTextEntry={true}
                                style={styles.input}
                                onChangeText={password => this.setState({password})}
                            />
                            {this.state.passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.passwordErrorMessage}</Text>}
                        </View>

                        <View style={styles.inputLayout}>
                            <Button  onPress={() => this.formValidation()} title="SUBMIT"/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    LoginLayout: {
        flex: 1,
        padding: 20
    },
    LogoLayout: {
        alignItems: "center",
        padding: 20
    },
    inputLayout: {
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1
    },
    textDanger: {
        color: "#dc3545"
    }
});