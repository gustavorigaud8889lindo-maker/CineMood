import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Movie } from '../services/api';

interface MovieCardProps {
  movie: Movie;
  onPress: () => void;
}

export default function MovieCard({
  movie,
  onPress,
}: MovieCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: movie.image }}
        style={styles.poster}
      />

      <View style={styles.information}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <View style={styles.score}>
          <Ionicons name="star" size={16} color="#f5c518" />

          <Text style={styles.scoreText}>
            {movie.rt_score}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: 180,
    margin: 6,
    backgroundColor: '#1b1b2f',
    borderRadius: 12,
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  information: {
    padding: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    minHeight: 38,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  scoreText: {
    color: '#dddddd',
    marginLeft: 5,
  },
});