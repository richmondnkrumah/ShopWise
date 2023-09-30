import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
  <Stack screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name='Filters' options={{
      headerShown:true,
      headerTitleAlign:'center'
    }} />

    </Stack>
  )
}

export default _layout