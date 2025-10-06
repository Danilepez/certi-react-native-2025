import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Iniciar sesión',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;