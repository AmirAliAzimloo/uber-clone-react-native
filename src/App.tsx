import { StyleSheet,  } from 'react-native'
import React from 'react'
import MapScreen from 'screens/MapScreen/MapScreen'
import { LocationPermissionsService } from 'services/LocationPermissionsService'

export const App = () => {
  return (
   <>
   <MapScreen />
   <LocationPermissionsService />
   </>
  )
}


const styles = StyleSheet.create({})