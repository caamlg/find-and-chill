/* eslint-disable prettier/prettier */
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import CustomModal from './components/molecules/CustomModal';
import Input from './components/atoms/Input/index';
import {styles} from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isChecked, setIsChecked] = useState(0);

  const handleOnChangeInput = value => {
    setText(value);
  };

  const addItem = () => {
    console.warn(text);
    console.log(text);
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };

  const handleDeleteItem = id => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };

  const handleCheckItem = id => {
    const checkedItem = textList.find(itemList => itemList.id === id);
    console.warn(checkedItem);
    setIsChecked(checkedItem.id);
    setSelectedItem({});
    setModalVisible(!modalVisible);
  };

  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Input
          placeholder="Escribe el título de una serie"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#1b998b"
          style={styles.textInput}
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button title="Agregar" color="#1b998b" onPress={() => addItem()} />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={textList}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <Text
                style={[
                  styles.textList,
                  {backgroundColor: item.id === isChecked && '#c5d86d'},
                ]}>
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        title="Acciones"
        description="¿Qué quieres hacer?"
        selectedItem={selectedItem}
        buttonDelete="Eliminar"
        onHandleDeleteItem={handleDeleteItem}
        onHandleCheckItem={handleCheckItem}
        buttonCheck="Marcar como visto"
      />
    </View>
  );
};

export default App;
