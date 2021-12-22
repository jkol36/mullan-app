import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import colors from '../../styles/colors'

const Background: React.FC = ({children}) => {
    return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Background;