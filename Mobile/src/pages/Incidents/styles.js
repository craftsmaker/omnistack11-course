import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight - 15,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText:{
    fontSize:22,
    color:'#737380',
  },

  headerTextBold:{
    fontWeight: 'bold',
  },

  title:{
    fontSize: 30,
    marginBottom: 6,
    marginTop: 5,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description:{
    fontSize: 16,
    lineHeight:24,
    color:'#737380'
  },

  incidentList:{
    marginTop: 5,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText:{
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  }

})