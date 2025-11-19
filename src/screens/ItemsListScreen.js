import { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { mockItems } from '../data/mockItems';
import ItemCard from '../components/items/ItemCard';
import ButtonPrimary from '../components/ui/ButtonPrimary';

export default function ItemsListScreen({ navigation }) {
  const [items, setItems] = useState(mockItems);
  const [query, setQuery] = useState('');

  const filtered = items.filter(i =>
    [i.name, i.description].join(' ').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="검색…"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />

        <ButtonPrimary
          title="추가"
          onPress={() =>
            navigation.navigate('Create', {
              add: (it) => setItems(prev => [...prev, it]),
            })
          }
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={() =>
              navigation.navigate('Detail', {
                id: item.id,
                get: () => items.find(x => x.id === item.id),
                remove: () => setItems(prev => prev.filter(x => x.id !== item.id)),
                update: (patch) =>
                  setItems(prev =>
                    prev.map(x => (x.id === item.id ? { ...x, ...patch } : x))
                  ),
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
    padding: 16,
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
});
