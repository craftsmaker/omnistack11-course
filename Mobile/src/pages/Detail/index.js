import React from 'react'
import {Feather} from '@expo/vector-icons'
import {View,Text,Image,TouchableOpacity,Linking} from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../../assets/logo.png'
import styles from './styles.js'

export default function Detail(){
  const navigation = useNavigation()
  const msg = 'Olá APD, estou entrando em contato...'
  let number = '557988383098'
  const incident = useRoute().params.incident;

  console.log(incident);

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject:'Herói do caso: cadelinha atropelada',
      recipients:['victorguedes68@hotmail.com'],
      body: msg,
    })
  }
  
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${number}&text=${msg}`)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041"/>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:{incident.value}</Text>
            
      </View>
      <View style={styles.contactBox}>
              <Text style={styles.heroTitle}>Salve o dia!</Text>
              <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

              <Text style={styles.heroDescription}>Entre em contato:</Text>

              <Text style={styles.actions}></Text>

              <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                  <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.action} onPress={sendMail}>
                  <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </View>
    </View>
  );
}