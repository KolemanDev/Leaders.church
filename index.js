import React from "react";
import {View, Text} from "react-native";
export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.blogApi.showSearch();

	externalCodeSetup.profileScreenHooksApi.setAfterProfileHeader(
	 props => {
	   console.log(props);
	   return <Text>showing user id after header, {props.user.id}</Text>
	 }); 
  };