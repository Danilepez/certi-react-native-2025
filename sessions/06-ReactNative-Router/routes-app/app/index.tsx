import React from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from './store/useAuthStore';

export default function HomeRedirect() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Redirect href="/(drawer)/(tabs)" />;
  }

  return <Redirect href="/auth" />;
}
