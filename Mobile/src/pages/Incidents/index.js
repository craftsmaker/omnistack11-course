import React, {useEffect,useState} from 'react'
import {View,Text,Image,FlatList,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api.js'


import logoImg from '../../../assets/logo.png'
import styles from './styles.js'
export default function Incidents(){
  const [incidents, setIncidents] = useState([])
  const [total,setTotal] = useState()
  const navigation = useNavigation(0)
  
  function navigateToDetail(incident){
    navigation.navigate('Detail', {incident})
  }
 
  // useEffect(() => {
  //    async function loadIncidents(){
  //       try{
  //         const response = await api.get('incidents')

  //         setIncidents(response.data)
  //         setTotal(response.headers['x-total-count'])
  //       } catch(err){
  //         return;
  //       }
  //     }
  //   loadIncidents()
  // });

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixos e salve</Text>
      
    </View>
  );
}