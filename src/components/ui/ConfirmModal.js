import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function ConfirmModal({ visible, title='확인', message, onCancel, onConfirm }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {message && <Text style={styles.msg}>{message}</Text>}

          <View style={{ flexDirection: 'row', marginTop: 16, gap: 8 }}>
            <Pressable style={[styles.btn, styles.cancel]} onPress={onCancel}>
              <Text>취소</Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.danger]} onPress={onConfirm}>
              <Text style={{ color: '#fff' }}>삭제</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center' },
  card: { backgroundColor:'#fff', padding:20, borderRadius:12, width:'80%' },
  title: { fontSize:18, fontWeight:'bold' },
  msg: { marginTop:8, fontSize:14 },
  btn: { flex:1, paddingVertical:10, borderRadius:8, alignItems:'center' },
  cancel: { backgroundColor:'#ccc' },
  danger: { backgroundColor:'#E5484D' },
});
