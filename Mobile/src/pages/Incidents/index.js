import React, {useEffect,useState} from 'react'
import {View,Text,Image,FlatList,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api.js'


import logoImg from '../../../assets/logo.png'
import styles from './styles.js'
export default function Incidents(){
  const [incidents, setIncidents] = useState([]);
  const [total,setTotal] = useState();
  const [verify,setVerify] = useState(true);
  const navigation = useNavigation(0);
  
  function navigateToDetail(incident){
    navigation.navigate('Detail', {incident})
  }

  async function loadIncidents(){
        try{
          const response = await api.get('/incidents')

          setIncidents([...incidents,...response.data])
          
          setTotal(response.headers['x-total-count'])
          setVerify(false);
        } catch(err){
          console.log(err);
        }
      }
 
  useEffect(() => {
     if (verify){      
      loadIncidents()
     }
  },[]);

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

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG </Text>
            <Text style={styles.incidentProperty}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentProperty}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={()=> navigateToDetail(incident)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041"/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}