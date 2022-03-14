/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { Button, Modal, Text, View } from 'react-native';

import React from 'react';
import {styles} from './styles';

const CustomModal = ({title, description, selectedItem, buttonDelete, onHandleDeleteItem, buttonCheck, onHandleCheckItem, visible }) => {
    return (
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          >
            <View style={styles.modalContainerContent}>
              <View style={styles.modaTitle}>
                <Text>{title}</Text>
              </View>
              <View style={styles.modalContent}>
                  <Text>{description}</Text>
                  <Text style={styles.textList}>{selectedItem.value}</Text>
              </View>
              <View style={styles.modalButton}>
                <Button
                  title={buttonDelete} 
                  color="#1b998b"
                  onPress={() => onHandleDeleteItem(selectedItem.id)}
                />
                <Button
                  title={buttonCheck} 
                  color="#1b998b"
                  onPress={() => onHandleCheckItem(selectedItem.id)}
                />
              </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
