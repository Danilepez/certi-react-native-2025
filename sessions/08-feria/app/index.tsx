import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useOnboarding } from '../src/hooks/useOnboarding';

export default function HomeRedirect() {
  const { hasSeenOnboarding, loading } = useOnboarding();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!hasSeenOnboarding) {
      router.replace('/onBoarding');
    } else {
      router.replace('/(auth)/login');
    }
  }, [hasSeenOnboarding, loading]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <ActivityIndicator size="large" color="#f9738f" />
    </View>
  );
}
