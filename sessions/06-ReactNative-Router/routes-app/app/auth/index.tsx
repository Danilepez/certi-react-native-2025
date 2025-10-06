import React from 'react';
import { Stack, router } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useThemeColors } from '../hooks/useThemeColors';
import { useAuthStore } from '../store/useAuthStore';
import type { ThemeColors } from '../theme/colors';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      padding: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 32,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default function LoginScreen() {
  const { colors } = useThemeColors();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { login } = useAuthStore();

  const handleLogin = () => {
    login();
    router.replace('/(drawer)/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Iniciar sesión' }} />

      <Text style={styles.title}>Pantalla de Login</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
