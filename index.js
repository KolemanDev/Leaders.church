import React from "react";
import { NativeModules } from "react-native";
const { RNCustomCode } = NativeModules;

import { initialize } from "@blocklienterprise/blockli";
import config from "@src/build_config.json";




export const applyCustomCode = async (externalCodeSetup) => {
    externalCodeSetup.courseSingleApi.setIsCourseDescriptionHidden((course) => {
      return true;
    });
	
  const blockli_config = {
    license: "6ZVSLCJ6C5C5XIQ",
    app_id: config.app_id,
    code: externalCodeSetup,
    //bcdn_token: "BUNNYCDN-TOKEN-AUTH-KEY",
    website: "https://leaders.church",
  };
    await initialize(blockli_config);




};

