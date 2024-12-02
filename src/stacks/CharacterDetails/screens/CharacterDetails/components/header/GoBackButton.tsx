import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {BackIcon} from '../../../../../../../assets/icons/BackIcon';
import {GO_BACK_TEXT} from '../../../../../../constants/commonContsnats';
import {useNavigateBack} from '../../../../../../hooks/useNavigateBack';
import {styles} from '../../styles/GoBackButton.styled';

export function GoBackButton() {
  const handleGoBack = useNavigateBack();

  return (
    <View style={styles.goBackRow}>
      <Pressable onPress={handleGoBack} style={styles.goBackPressable}>
        <BackIcon />
        <Text style={styles.goBackText}>{GO_BACK_TEXT}</Text>
      </Pressable>
    </View>
  );
}
