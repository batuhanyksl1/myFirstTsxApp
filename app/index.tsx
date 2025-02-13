import { View, StyleSheet } from 'react-native';
import React from 'react';
import Buttony from '@/components/Buttony';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/settings">Settings</Link>
      <Buttony variant="filled" size="xsm" >
        Hello
      </Buttony>
      <Buttony variant='accept' size="xsm">
        Hello
      </Buttony>
      <Buttony variant="ghost" size="xlg" >
        Hello
      </Buttony>
      <Buttony variant="accept" size="md" >
        Hello
      </Buttony>
    </View>
  );
};

export default index;
