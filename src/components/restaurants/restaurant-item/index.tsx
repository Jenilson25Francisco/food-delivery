import { Image, Pressable, Text } from 'react-native'
import type { RestaurantsProps } from '..'

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable
      className="flex-col items-center justify-center"
      onPress={() => console.warn('CLICOU NO RESTAURANTE' + item.name)}
    >
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <Text
        className="mt-2 text-sm w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  )
}
