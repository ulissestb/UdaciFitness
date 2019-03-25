import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendars'

export function submitEntry({entry, key}){
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify)

}

export function removeEntry(){

}