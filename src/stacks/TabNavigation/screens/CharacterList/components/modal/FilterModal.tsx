import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {BlankCheck} from '../../../../../../../assets/icons/BlankCheck';
import {CheckedCheck} from '../../../../../../../assets/icons/CheckedCheck';
import {PrimaryButton} from '../../../../../../components/buttons/PrimaryButton';
import {styles} from './FilterModal.styled';

export const FilterModal = ({
  statusFilter = {alive: false, dead: false, unknown: false},
  speciesFilter = {human: false, humanoid: false},
  toggleFilter,
  applyFilters,
  resetFilters,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>STATUS</Text>
            {['alive', 'dead', 'unknown'].map(status => (
              <TouchableOpacity
                key={status}
                style={styles.filterOption}
                onPress={() => toggleFilter('status', status)}>
                {statusFilter[status] ? <CheckedCheck /> : <BlankCheck />}
                <Text style={styles.filterOptionText}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>SPECIES</Text>
            {['human', 'humanoid'].map(species => (
              <TouchableOpacity
                key={species}
                style={styles.filterOption}
                onPress={() => toggleFilter('species', species)}>
                {speciesFilter[species] ? <CheckedCheck /> : <BlankCheck />}
                <Text style={styles.filterOptionText}>
                  {species.charAt(0).toUpperCase() + species.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonsContainer}>
            <PrimaryButton filled={false} onPress={resetFilters}>
              RESET
            </PrimaryButton>
            <PrimaryButton
              filled={true}
              onPress={() => {
                applyFilters();
                setIsModalVisible(false);
              }}>
              APPLY
            </PrimaryButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};
