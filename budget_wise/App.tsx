import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import Home from './pages/Home'
import { SafeAreaView } from 'react-native'
import Navigation from './Navigation'
export type Post = {
  id: number;
  username: string;
  title: string;
  venue: string;
  date: string;
  club: string;
  imageUrl?: string;
};

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Admin: undefined;
  AddPost : undefined;
  Splash:undefined;
};


export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
      <SafeAreaView style={{ flex: 1 }}>
      {session && session.user ? <Navigation /> : <Auth />}
    </SafeAreaView>
  )
}
