import React from "react";
import {View, Text} from "react-native";
export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>This is my signup screen.</Text>
        </View>
    ));
};