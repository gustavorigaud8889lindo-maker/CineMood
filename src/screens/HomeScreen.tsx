import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieCard from '../components/MovieCard';
import { getMovies, Movie } from '../services/api';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadMovies() {
    try {
      setLoading(true);
      setError(false);

      const data = await getMovies();
      setMovies(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#f5c518"
        />

        <Text style={styles.message}>
          Carregando filmes...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Não foi possível carregar os filmes.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={loadMovies}
        >
          <Text style={styles.buttonText}>
            Tentar novamente
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate('Details', {
                movie: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  list: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
  row: {
    width: '100%',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0f1a',
    padding: 20,
  },
  message: {
    color: '#ffffff',
    marginTop: 12,
  },
  errorText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f5c518',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#111111',
    fontWeight: 'bold',
  },
});