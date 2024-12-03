// styled.ts
import {StyleSheet} from 'react-native';
import {scale} from '../../../../../../config/scale';
import {theme} from '../../../../../../styles/theme';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    backgroundColor: theme.colors.white,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    textAlign: 'left',
    fontFamily: 'Mono-Regular',
    fontWeight: '600',
    marginBottom: 10,
    fontSize: scale * 16,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  filterOptionText: {
    fontSize: scale * 16,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
