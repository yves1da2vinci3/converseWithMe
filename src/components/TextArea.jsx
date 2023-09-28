import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native'
const TextArea = ({setValue,value,defaultValue,placeholder}) => {
    const [inputHeight, setInputHeight] = useState(60); // Initial height

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Update the input height based on the content's height
    setInputHeight(Math.max(60, contentHeight)); // Set a minimum height of 40
  };
  return (
    <TextInput
      multiline
      value={value}
      onChangeText={(newText) => setValue(newText)}
      defaultValue={defaultValue}
      onContentSizeChange={(e) =>
        handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
      } 
      className={`rounded-lg border-2 p-3 flex-row items-center ${value?.length> 0 ? "border-black" : "border-gray-500" } `}
      style={{height : inputHeight} }
      placeholder={"ecrivez en francais ou en anglais "}
    />
  )
}

export default TextArea
