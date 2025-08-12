import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'
import { Header } from '@/components/header'
import { Banner } from '@/components/banner'
import { SearchInput } from '@/components/search-input'
import { Section } from '@/components/section'
import { Tranding } from '@/components/tranding'
import { Restaurants } from '@/components/restaurants'
import { RestaurantVerticalList } from '@/components/restaurant-vertical-list'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView
      className="flex-1 bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <SearchInput />
      </View>
      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log('clicou no botão')}
        size="text-2xl"
      />
      <Tranding />
      <Section
        name="Famosos no KambaFood"
        label="Veja todos"
        action={() => console.log('clicou no botão')}
        size="text-xl"
      />
      <Restaurants />
      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log('clicou no botão')}
        size="text-xl"
      />
      <RestaurantVerticalList />
    </ScrollView>
  )
}
