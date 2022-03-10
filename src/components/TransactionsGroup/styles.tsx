import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#E3E3E3", // delete later, used now for styling
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    width: '33.3333%',
  },
  selectedBtn: {
    borderBottomWidth: 2,
    borderColor: '#6B7280',
  },
  unselectedBtn: {
    borderColor: '#253C85',
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 16,
    fontSize: 14,
  },
  searchFilterContainer: {
    padding: '5.26%', // 15
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    width: '70%',
    marginRight: 16,
    borderColor: '#A9A9A9',
    borderWidth: 1.2,
    borderRadius: 8,
    shadowOpacity: 0,
  },
  innerSearchbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0
  },
  searchText: {
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#525454',
    margin: 0,
    flex: 1
  },
  filtersButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  filtersButtonText: {
    color: '#F2F2F2',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: '800',
  },

  modalIconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 17
  },
  innerModal: {
    // marginTop: 26,
    height: "100%"
  },
  filtersContainer: {
    height: 649,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#272929"
  },
  filterGroup: {
    width: "100%"
  },
  filterButtonGroup: {
    width: "100%"
  },
  filterBtn: {
    width: "100%",
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    marginVertical: 5,
    padding: 12
  },
  filterBtnText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
  },
  amountsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  to: {
    color: '#A9A9A9',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: '800',
    width: "10%"
  },
  amountInput: {
    width: "45%",
    borderWidth: 1.5,
    borderColor: "#F7F7F7",
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    marginVertical: 5,
    padding: 12,

    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: '#525454'
  },
  resetApplyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#C4C4C4",
    height: 87
  },
  resetApplyButton: {
    borderWidth: 2,
    borderColor: "#C4C4C4",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: "45%"
  },
});
