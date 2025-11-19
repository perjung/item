import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ButtonPrimary from '../ui/ButtonPrimary';

export default function ItemForm({ initial = {}, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: initial.name ?? '',
    description: initial.description ?? '',
    price: initial.price != null ? String(initial.price) : '',
  });

  const update = (k, v) => setForm(prev => ({
    ...prev,
    [k]: k === 'price' ? v.replace(/[^0-9]/g, '') : v
  }));

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="예) 무지 티셔츠"
          value={form.name}
          onChangeText={(t)=>update('name', t)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>설명</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="간단 설명"
          multiline
          value={form.description}
          onChangeText={(t)=>update('description', t)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>가격</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          value={form.price}
          onChangeText={(t)=>update('price', t)}
        />
      </View>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 16 }}>
        <ButtonPrimary title="저장" onPress={() => onSubmit?.({
          name: form.name.trim(),
          description: form.description.trim(),
          price: Number(form.price || 0),
        })} />
        <ButtonPrimary title="취소" onPress={onCancel} style={{ backgroundColor: '#444' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  row: { marginBottom: 12 },
  label: { fontSize: 14, marginBottom: 4 },
  input: { borderWidth: 1, borderRadius: 8, borderColor: '#ccc', paddingHorizontal: 8, height: 40 },
});
