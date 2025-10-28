import { useEffect, useState } from 'react';
import { useOnboardingStore } from '../store/onboardingStore';

export const useOnboarding = () => {
  const [loading, setLoading] = useState(true);
  const { hasSeenOnboarding, markOnboardingAsCompleted, resetOnboarding } = useOnboardingStore();

  // Esperar a que el store se hidrate desde AsyncStorage
  useEffect(() => {
    // Pequeño delay para asegurar que el store se hidrate
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    hasSeenOnboarding,
    loading,
    markOnboardingAsCompleted,
    resetOnboarding,
  };
};
