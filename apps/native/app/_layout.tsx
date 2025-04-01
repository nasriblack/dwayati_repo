import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import QueryProvider from '../store/QueryProvider';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';

const AppLayout = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </QueryProvider>
  );
};

export default AppLayout;
