import {useRef, useEffect, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {Search} from '../icons';
import {useAtom} from 'jotai';
import {searchQueryAtom} from '@/stores/filters';
import {theme} from '@/constants/theme';
import {styles} from './SearchBar.styled';

const DEBOUNCE_DELAY = 300;

const SearchBar = () => {
  const [query, setQuery] = useAtom(searchQueryAtom);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<TextInput>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedSetQuery = (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setQuery(text);
    }, DEBOUNCE_DELAY);
  };

  const handleInputChange = (e: any) => {
    const text = e.nativeEvent.text;
    setInputValue(text);
    debouncedSetQuery(text);
  };

  const handleSubmit = (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setInputValue(text);
    setQuery(text);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={handleFocus}>
      <Search />
      <TextInput
        ref={inputRef}
        returnKeyType="search"
        inputMode="search"
        placeholder="Search the characters"
        onSubmitEditing={e => {
          handleSubmit(e.nativeEvent.text);
        }}
        onBlur={e => handleSubmit(e.nativeEvent.text)}
        onChange={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholderTextColor={theme.colors.mediumGreen}
        autoCorrect={false}
      />
    </Pressable>
  );
};

export default SearchBar;
