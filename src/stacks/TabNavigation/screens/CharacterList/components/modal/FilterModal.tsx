import {Modal, View} from 'react-native';
import {PrimaryButton} from '../../../../../../components/buttons/PrimaryButton';
import {FilterModalProps} from '../../../../../../typescript/filterTypes';
import {styles} from './FilterModal.styled';
import {FilterSection} from './FilterSection';

export const FilterModal = ({
  statusFilter,
  speciesFilter,
  toggleFilter,
  applyFilters,
  resetFilters,
  isModalVisible,
  setIsModalVisible,
}: FilterModalProps) => {
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <FilterSection
            title="status"
            options={['alive', 'dead', 'unknown']}
            selectedOptions={statusFilter}
            toggleFilter={toggleFilter}
          />
          <FilterSection
            title="species"
            options={['human', 'humanoid']}
            selectedOptions={speciesFilter}
            toggleFilter={toggleFilter}
          />
          <View style={styles.buttonsContainer}>
            <PrimaryButton filled={false} onPress={resetFilters} width="small">
              RESET
            </PrimaryButton>
            <PrimaryButton
              filled={true}
              onPress={() => {
                applyFilters();
                setIsModalVisible(false);
              }}
              width="small">
              APPLY
            </PrimaryButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};
