import React from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from './store/useAuthStore';

export default function HomeRedirect() {
  return <Redirect href="/auth" />;
}
