import React, { Component } from 'react';
import { Linking, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default function ContactUs() {
  return <View style={styles.wrapper}>
    <Text style={styles.addressText}>{`Address:
      Keas 69 Str.
      15234, Chalandri
      Athens,
      Greece`}
    </Text>
    <TouchableOpacity onPress={() => Linking(`tel:${+302106019311}`)}>
      <Text style={styles.phoneText}>+30 - 2106019311 (landline)</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking(`tel:${+302106398905}`)}>
      <Text style={styles.phoneText}>+ 30 - 2106398905 (fax)</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking(`tel:${+306977664062}`)}>
      <Text style={styles.phoneText}>+ 30 - 6977664062 (mobile phone)</Text>
    </TouchableOpacity>
  </View>;
}

//

// +30 - 2106019311(landline)
//   + 30 - 6977664062(mobile phone)
//   + 30 - 2106398905(fax)
