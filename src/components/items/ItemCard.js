import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function ItemCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrap, pressed && { opacity: 0.8 }]}>
      <Image
        source={{ uri: 'https://picsum.photos/seed/' + item.id + '/120' }}
        style={styles.thumb}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.price}>{item.price.toLocaleString()}원</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  name: { fontSize: 16, fontWeight: '600' },
  desc: { fontSize: 13, color: '#555', marginTop: 4 },
  price: { fontSize: 15, fontWeight: 'bold', marginTop: 8 },
});
