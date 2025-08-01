import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { RestaurantItem } from './restaurant-item'

export type RestaurantsProps = {
  id: string
  name: string
  image: string
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch('http://192.168.1.8:3000/restaurants')
      const data = await response.json()
      setRestaurants(data)
    }

    getRestaurants()
  }, [])

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
    />
  )
}
