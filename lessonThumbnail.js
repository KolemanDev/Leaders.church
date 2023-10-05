import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { getApi } from "@src/services";

const lessonThumbnailData = (props) => {
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    const api = getApi(props.config);
    api.customRequest(
        "/wp-json/buddyboss-app/learndash/v1/lessons/14925",
        "get", // HTTP method should be lowercase
      {}, // JSON, FormData, or any other payload
      null, // Validation function or null
      {}, // Request headers
      false // Use the suffix, so set to false
    )
      .then((response) => {
        setApiResponse(response.data);
        console.log(response.data); // Move inside the .then block
        console.log("oogly boogly");
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{JSON.stringify(apiResponse)}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  config: state.config,
  accessToken: state.auth.token,
});

export default connect(mapStateToProps)(lessonThumbnailData);
