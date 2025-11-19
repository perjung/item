import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import ConfirmModal from '../components/ui/ConfirmModal';

export default function ItemDetailScreen({ route, navigation }) {
  const { get, remove, update } = route.params;
  const [item, setItem] = useState(null);
  const [showDel, setShowDel] = useState(false);

  useEffect(() => {
    setItem(get());
  }, []);

  if (!item) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()}원</Text>

      <View style={styles.space16} />

      <ButtonPrimary
        title="수정하기"
        onPress={() =>
          navigation.navigate('Edit', {
            initial: item,
            apply: (patch) => {
              update(patch);
              setItem(prev => ({ ...prev, ...patch }));
            },
          })
        }
      />

      <View style={styles.space8} />

      <ButtonPrimary
        title="삭제하기"
        style={styles.deleteButton}
        onPress={() => setShowDel(true)}
      />

      <ConfirmModal
        visible={showDel}
        message="정말 삭제할까요?"
        onCancel={() => setShowDel(false)}
        onConfirm={() => {
          remove();
          setShowDel(false);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
  price: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  space16: {
    height: 16,
  },
  space8: {
    height: 8,
  },
  deleteButton: {
    backgroundColor: '#E5484D',
  },
});
