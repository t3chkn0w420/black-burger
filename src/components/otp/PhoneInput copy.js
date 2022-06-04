/**
 * CountDown Timer Component
 */

// packages
import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';

function CounterApp() {
  // Timer References
  const refTimer = useRef();

  // For keeping a track on the Timer
  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    console.warn(
      'You can alert the user by letting him know that Timer is out.',
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ display: timerEnd ? 'none' : 'flex' }}>
        <CountDownTimer
          ref={refTimer}
          timestamp={120}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 56,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            backgroundColor: '#2196f3',
          }}
          textStyle={{
            fontSize: 25,
            color: '#FFFFFF',
            fontWeight: '500',
            letterSpacing: 0.25,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          display: timerEnd ? 'flex' : 'none',
          height: 56,
          width: 120,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          backgroundColor: '#512da8',
        }}
        onPress={() => {
          setTimerEnd(false);
          refTimer.current.resetTimer();
        }}>
        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>
          Resend
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CounterApp;