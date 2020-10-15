import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OrphanageDetails() {
  return(
    <View style={styles.container}> 
      <Text style={styles.orphanageDetailText} >Tela detalhe orfanatos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orphanageDetailText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },
});