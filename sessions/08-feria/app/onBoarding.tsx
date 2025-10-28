import OnBoarding from 'react-native-onboarding-swiper'
import { STEPS } from '../src/data/steps';
import { router } from 'expo-router';
import { useOnboardingStore } from '../src/store/onboardingStore';

const onBoardingScreen = () => {
    const { markOnboardingAsCompleted } = useOnboardingStore();

    const finish = () => {
        console.log('Onboarding finished');
        markOnboardingAsCompleted();
        router.replace('/(auth)/login');
    }

    return (
        <OnBoarding
            pages={STEPS}
            onDone={finish}
            onSkip={finish}
        />
    )
}

export default onBoardingScreen;