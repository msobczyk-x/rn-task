// import { useRef } from "react";
// import { Pressable, TextInput } from "react-native";
// import { Search } from "../icons";

// export default function SearchInput() {
//   const
//   const inputRef = useRef<TextInput>(null);

//   const handleSubmit = () => {
//     // if (!query || pathname.includes("search")) return;
//     // router.push("/(protected)/(tabs)/search");
//   };

//   const handleFocus = () => {
//     inputRef.current?.focus();
//   };

//   return (
//     <Pressable style={styles.container} onPress={handleFocus}>
//       <Search />
//       <TextInput
//         ref={inputRef}
//         returnKeyType="search"
//         inputMode="search"
//         placeholder="Search videos"
//         onSubmitEditing={(event) => {
//           handleSubmit();
//         }}
//         onBlur={() => handleSubmit()}
//         onChange={(e) => setQuery(e.nativeEvent.text)}
//         defaultValue={query}
//         style={styles.input}
//         placeholderTextColor={theme.colors.textPlaceholder}
//         autoCorrect={false}
//       />
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create((theme) => ({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     height: 44,
//     borderColor: theme.colors.primary,
//     borderWidth: 2,
//     borderRadius: theme.padding(2),
//     paddingHorizontal: theme.padding(1.5),
//     backgroundColor: theme.colors.whiteBackground,
//     gap: theme.gap(1),
//   },
//   input: {
//     ...theme.fonts.bodyLarge(false),
//     flex: 1,
//     color: theme.colors.textPrimary,
//   },
// }));
