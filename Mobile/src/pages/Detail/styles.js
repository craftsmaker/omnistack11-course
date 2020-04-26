import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight - 10,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 8,
    marginTop: 10
  },

  incidentProperty: {
    fontSize: 14,
    color: '#42424d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  contactBox:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 8,
  },
  heroTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#737380',
    marginTop: 16,
  },
  actions:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action:{
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
})