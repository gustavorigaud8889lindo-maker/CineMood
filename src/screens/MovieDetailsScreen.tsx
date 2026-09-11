import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Movie } from '../services/api';

export default function MovieDetailsScreen() {
  const route = useRoute<any>();
  const movie: Movie = route.params.movie;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movie.movie_banner }}
        style={styles.banner}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>

        <Text style={styles.originalTitle}>
          {movie.original_title}
        </Text>

        <View style={styles.score}>
          <Ionicons name="star" size={22} color="#f5c518" />
          <Text style={styles.scoreText}>
            {movie.rt_score} / 100
          </Text>
        </View>

        <Text style={styles.information}>
          Ano de lançamento: {movie.release_date}
        </Text>

        <Text style={styles.information}>
          Duração: {movie.running_time} minutos
        </Text>

        <Text style={styles.information}>
          Diretor: {movie.director}
        </Text>

        <Text style={styles.information}>
          Produtor: {movie.producer}
        </Text>

        <Text style={styles.sectionTitle}>Sinopse</Text>

        <Text style={styles.description}>
          {movie.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  banner: {
    width: '100%',
    height: 230,
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  originalTitle: {
    color: '#aaaaaa',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 14,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  scoreText: {
    color: '#ffffff',
    fontSize: 17,
    marginLeft: 7,
  },
  information: {
    color: '#dddddd',
    fontSize: 15,
    marginBottom: 7,
  },
  sectionTitle: {
    color: '#f5c518',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
  },
  description: {
    color: '#eeeeee',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    paddingBottom: 30,
  },
});