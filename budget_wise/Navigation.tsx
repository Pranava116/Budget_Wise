import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import Auth from "./components/Auth";
import Profile from "./pages/Profile";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";

import { RootStackParamList } from "./types/types";



const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}