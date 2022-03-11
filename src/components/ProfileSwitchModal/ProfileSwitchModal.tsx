import * as React from "react";
import { View, Text, Modal, Pressable, FlatList, Image } from 'react-native';
import styles from './styles'

import globalStyles from "../../globalStyles";
import SvgIcon from "../../../assets/SvgIcon";

function Item({
  name,
  role,
  status,
}: {
  name: string;
  role: string;
  status: string;
}) {
  if (status == "Signed In") {
    return (
      <View style={styles.headFlatListItem}>
        <Image
          style={styles.modalImage}
          source={require('../../../assets/images/CrownedSmiley.png')}
        />
        <View style={styles.listInfo}>
          <Text style={globalStyles.body1Bold}>{name}</Text>
          <Text style={globalStyles.body2}>{role}</Text>
        </View>
        <Pressable style={styles.signedIn}>
          <Text style={globalStyles.body2}>{status}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.flatListItem}>
      <Image
        style={styles.modalImage}
        source={require('../../../assets/images/Smileys.png')}
      />
      <View style={styles.listInfo}>
        <Text style={globalStyles.body1Bold}>{name}</Text>
        <Text style={globalStyles.body2}>{role}</Text>
      </View>
      <Pressable style={styles.switch}>
        <Text style={globalStyles.body2}>{status}</Text>
      </Pressable>
    </View>
  );
}

const DATA = [
  {
    id: "1",
    name: "Kelly Hu",
    role: "Dependent",
  },
  {
    id: "2",
    name: "Albert Liu",
    role: "Dependent",
  },
  {
    id: "3",
    name: "Sydney Bui",
    role: "Dependent",
  },
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
  <Item name={item.name} role={item.role} status="Switch" />
);

const itemSeparator = () => <View style={styles.itemSeparator} />;

const addMember = () => (
  <View style={styles.addMember}>
    <Pressable style={styles.addPressable}>
      <SvgIcon type="addPlus" />
    </Pressable>
    <Text style={[globalStyles.body1Bold, styles.listInfo]}>Add Member</Text>
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
        <Pressable
          style={styles.switchModalX}
          onPress={() => setVisible(false)}
        >
          <SvgIcon type="greyX" />
        </Pressable>
        <Item name="Jacob Kim" role="Head" status="Signed In" />
        <View style={styles.modalDivider} />
        <FlatList
          style={styles.flatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
          ListFooterComponent={addMember}
        />
      </View>
    </Modal>
  );
}
