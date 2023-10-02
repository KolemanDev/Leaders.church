// Import necessary modules
import React, { useEffect } from 'react';
import { View } from 'react-native';
console.log("123123");
// Define a custom event
const EVENT_LEARNDASH_COURSE_BEFORE = 'learndash-course-before';

// Define your functional component
const LessonThumbnail = () => {
  useEffect(() => {
    // Listen for the custom 'learndash-course-before' event
    const handleCourseBeforeEvent = (event) => {
      // Access the lesson information from the event object
      const lessonInfo = event.detail;
    
      // Log the current lesson to the console
      console.log('Current Lesson:', lessonInfo);
    };

    // Add an event listener when the component mounts
    document.addEventListener(EVENT_LEARNDASH_COURSE_BEFORE, handleCourseBeforeEvent);

    // Remove the event listener when the component unmounts (cleanup)
    return () => {
      document.removeEventListener(EVENT_LEARNDASH_COURSE_BEFORE, handleCourseBeforeEvent);
    };
  }, []);

  return (
    <View>
      {/* Your component's content here */}
    </View>
  );
};

export default LessonThumbnail;
