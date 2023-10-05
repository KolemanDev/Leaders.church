// index.js
import React from "react";
import { NativeModules } from "react-native";
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import lessonThumbnailData from "./lessonThumbnail";

// const { RNCustomCode } = NativeModules;

import { initialize } from "@blocklienterprise/blockli";
import config from "@src/build_config.json";



export const applyCustomCode = externalCodeSetup => {
  console.log("here?");

  const blockli_config = {
    license: "6ZVSLCJ6C5C5XIQ", // Enter your 15 digit Blockli App Kit license key here. See your account dashboard at https://blockli.dev/dashboard
    app_id: config.app_id,
    code: externalCodeSetup,
    //bcdn_token: "BUNNYCDN-TOKEN-AUTH-KEY",
    website: "https://leaders.church", // Enter your app domain here with NO trailing slash. 
    // NOTE: If you have a staging site, please use a different Git branch for your test app and COPY this entire code to the test branch and enter the staging site domain. 
  };

    // Hide video series description
  externalCodeSetup.courseSingleApi.setIsCourseDescriptionHidden((course) => {
    return true;
  });
  // lessonThumbnailData(externalCodeSetup);

  await initialize(blockli_config);

};
