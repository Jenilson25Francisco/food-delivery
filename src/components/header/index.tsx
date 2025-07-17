import { Ionicons, Feather } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export function Header() {
  return (
    <View className="w-full items-center justify-between flex-row">
      <Pressable className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>
      <View className="flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800">Localização</Text>
        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#ff0000" />
          <Text className="text-lg font-bold">Ingombotas</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  )
}
