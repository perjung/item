import { View } from 'react-native';
import ItemForm from '../components/items/ItemForm';

export default function ItemEditScreen({ route, navigation }) {
  const { initial, apply } = route.params;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <ItemForm
        initial={initial}
        onSubmit={(form) => {
          apply?.(form);
          navigation.goBack();
        }}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
}
