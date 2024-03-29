import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';


const Popularjobs = () => {

  const router = useRouter();
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'React Developer',
      num_pages: 1,
    }
  )

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.headerTitle}> Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} >View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />) :
          error ? (<Text>Something went wrong</Text>) :
            (
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ item }) => (
                  <PopularJobCard item={item} />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal

              />
            )


        }


      </View>

    </View>
  )
}

export default Popularjobs