import { db } from "@api/config.firebase";
import { Animation } from "@components";
import { useAuth } from "@providers";
import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import styles from './styles';

const SplashScreen = () => {
  const [message, setMessage] = useState('')
  const { user } = useAuth()
  const router = useRouter()
  const messages = [
    "Deneme 1",
    "Deneme 2",
    "Deneme 3"
  ]
  useEffect(()=> {
    setMessage(messages[Math.floor(Math.random() * messages.length)])
  },[])

  useEffect(()=> {
    if (!user) {
      setTimeout(()=> {
        router.replace('/src/screens/side/StartScreen')
      }, 3000)
    }

    const checkUser = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid)
        const userDoc = await getDoc(userRef)
        const userData = userDoc.data()
        if (userData?.newUser) {
         setTimeout(()=> {
          router.replace('/src/screens/side/StartScreen')
         }, 3000)
        }
        else {
          setTimeout(()=> {
            router.replace('/src/screens/main/Home')
          }, 3000)
        }
      }

    }
    checkUser()
  },[user])

  return (
    <View style={styles.container}>
      <Animation
        src={"https://lottie.host/402a58c9-36f2-420a-802e-ca4ed35f5679/SXG4LHC3ZQ.lottie"}
        contentStyle={{
          width: 250,
          height: 250,
        }}
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default SplashScreen