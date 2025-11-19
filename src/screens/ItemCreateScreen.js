import { View } from 'react-native';
import ItemForm from '../components/items/ItemForm';

export default function ItemCreateScreen({ route, navigation }) {
  const add = route.params?.add;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ItemForm
        onSubmit={(form) => {
          const newItem = { id: Date.now(), ...form };
          add?.(newItem);
          navigation.goBack();
        }}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
}
