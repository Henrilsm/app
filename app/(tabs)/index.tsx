import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";

const profileImage = require("../../assets/images/Profile.jpg");



const userInfo = {
  name: "Henri Moraes",
  bio: "Oi, me chamo Henri Moraes, tenho 20 anos e nasci em Salvador/BA. Atualmente sou estudante de ciências da computação na Universidade Católica de Pernambuco (UNICAP) e estou no 5 semestre.",
};
// ---------------------------------

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.content}>
        {/* Imagem de perfil carregada localmente */}
        <Image source={profileImage} style={styles.avatar} />

        {/* Nome em destaque */}
        <Text style={styles.name}>{userInfo.name}</Text>

        {/* Mini biografia */}
        <Text style={styles.bio}>{userInfo.bio}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#007AFF",
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: "#A9A9A9",
    textAlign: "center",
    lineHeight: 24,
  },
});
