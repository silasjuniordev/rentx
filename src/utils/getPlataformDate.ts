import { addDays } from 'date-fns'
import { Platform } from 'react-native'

export function getPlataformDate(date: Date) {
    if (Platform.OS === 'ios') {
        return date
    } else {
        return addDays(date, 1)
    }
}