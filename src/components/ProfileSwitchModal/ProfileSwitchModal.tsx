import * as React from "react";
import { View, Text, Modal, Pressable, FlatList, Image } from 'react-native';
import styles from './styles'

import globalStyles from "../../globalStyles";
import SvgIcon from "../../../assets/SvgIcon";

function Item({
  name,
  role,
  signedIn,
}: {
  name: string;
  role: string;
  signedIn: boolean;
}) {
  if (signedIn) {
    return (
      <View style={styles.flatListItem}>
        <Pressable style={styles.flatListImagePressable}>
          <SvgIcon type='headSmiley' />
        </Pressable>
        <View style={styles.listInfo}>
          <Text style={globalStyles.body1Bold}>{name}</Text>
          <Text style={globalStyles.body2}>{role}</Text>
        </View>
        <Pressable style={styles.signedIn}>
          <Text style={globalStyles.body2}>Signed In</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.flatListItem}>
      <Pressable style={styles.flatListImagePressable}>
        <SvgIcon type='dependentSmiley'/>
      </Pressable>
      <View style={styles.listInfo}>
        <Text style={globalStyles.body1Bold}>{name}</Text>
        <Text style={globalStyles.body2}>{role}</Text>
      </View>
      <Pressable style={styles.switch}>
        <Text style={styles.body2WHITE}>Switch</Text>
      </Pressable>
    </View>
  );
}

const DATA = [
  {
    id: '0',
    name: 'Jacob Kim',
    role: 'Head',
    signedIn: true,
  },
  {
    id: "1",
    name: "Kelly Hu",
    role: "Dependent",
    signedIn: false,
  },
  // {
  //   id: "2",
  //   name: "Albert Liu",
  //   role: "Dependent",
  //   signedIn: false,
  // },
  // {
  //   id: "3",
  //   name: "Sydney Bui",
  //   role: "Dependent",
  //   signedIn: false, 
  // },
  // {
  //   id: '4',
  //   name: 'Gabe Espinosa',
  //   role: 'Head',
  // },
  // {
  //   id: '5',
  //   name: 'Danashi Messele',
  //   role: 'Dependent',
  // },
];

const renderItem = ({ item }) => (
  <Item name={item.name} role={item.role} signedIn={item.signedIn} />
);

const itemSeparator = () => <View style={styles.itemSeparator} />;

const addMember = () => (
  <View style={styles.addMember}>
    <View style={styles.lastItemSeparator}/>
    <Pressable style={styles.flatListImagePressable}>
      <SvgIcon type="addPlus" />
    </Pressable>
    <Text style={[globalStyles.body1, styles.listInfo]}>Add Family Member</Text>
  </View>
);

export default function ProfileSwitchModal({
  visible,
  setVisible,
  userID,
}: {
  visible: boolean;
  setVisible: Function,
  userID: string;
}) {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.switchProfileModalView}>
        <Text style={[globalStyles.h4Bold, styles.switchTitle]}>Switch Accounts</Text>
        <Pressable
          style={styles.switchModalX}
          onPress={() => setVisible(false)}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <FlatList
          style={styles.flatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
          ListFooterComponent={addMember}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </Modal>
  );
}
