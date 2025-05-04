import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState, useRef } from "react";
import {captureRef} from 'react-native-view-shot';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { type ImageSource } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from 'expo-media-library';

import InputField from "@/components/InputField"

import Imageviewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [amountIncomeMale, setIncomeMale] = useState<string>("20");
  const [amountIncomeFemale, setIncomeFemale] = useState<string>("20");
  const [amountBankAccountFee, setBankAccountFee] = useState<string>("20,9");
  const [amountRent, setRent] = useState<string>("20");
  const [amountElectricityFee, setElectricityFee] = useState<string>("20");
  const [amountInternetFee, setInternetFee] = useState<string>("20,90");
  const [amountSIMCardMale, setSIMCardMale] = useState<string>("20,99");
  const [amountSIMCardFemale, setSIMCardFemale] = useState<string>("20,99");
  const [amountDITIBSubscription, setDITIBSubscription] = useState<string>("20");


  const imageRef = useRef<View>(null);
  const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource|undefined>(undefined);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Du hasch kei Bild ausgwählt')
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Das Bild wurde gespeichert.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>Fix-Kosten/-Einahmen</Text>
      <View style={styles.incomeRow}>
        <InputField label="Einnahme Mann" value={amountIncomeMale} income={true}/>
        <InputField label="Einnahme Frau" value={amountIncomeFemale} income={true}/>
      </View>
      <View style={styles.outgoingsRow}>
        <InputField label="Kontoführungsgebühren" value={amountBankAccountFee} income={false}/>
        <InputField label="Miete" value={amountRent} income={false}/>
        <InputField label="Strom" value={amountElectricityFee} income={false}/>
        <InputField label="Telekom" value={amountInternetFee} income={false}/>
        <InputField label="Sim-Karte Mann" value={amountSIMCardMale} income={false}/>
        <InputField label="Sim-Karte Frau" value={amountSIMCardFemale} income={false}/>
        <InputField label="DITIB Mitgliedsbeitrag" value={amountDITIBSubscription} income={false}/>
      </View>
      <Button label="Speichern" theme="primary"></Button>
    </GestureHandlerRootView>
  );
}

const styles =  StyleSheet.create({
  incomeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  outgoingsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: '#fff'
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
