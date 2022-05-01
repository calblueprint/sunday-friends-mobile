import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
  },
  btnGroup: {
    flexDirection: 'row',
    backgroundColor: "#FAFAFA",
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    width: '33.3333%',
  },
  selectedBtn: {
    borderBottomWidth: 3,
    borderColor: '#253C85',
  },
  unselectedBtn: {
    borderBottomWidth: 3,
    borderColor: '#F2F2F2',
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 11,
    fontSize: 14,
    color: '#272929',
    fontFamily: 'Avenir',
    fontWeight: '800',
  },
  searchFilterContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    width: '70%',
    marginRight: 16,
    borderColor: '#A9A9A9',
    borderWidth: 1.2,
    borderRadius: 8,
    shadowOpacity: 0,
  },
  innerSearchbar: {
    display: "flex",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    flex: 1
  },
  iconWrapper: {
    padding: 10
  },
  searchText: {
    fontFamily: 'Avenir',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    color: '#525454',
    margin: 0,
    flex: 1
  },
  noneFoundText: {
    textAlign: "center",
    color: "#525454",
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 12,
    lineHeight: 16,
    marginVertical: 2,
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
    padding: 14
  },
  closeText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: "#526DC2",
  },
  innerModal: {
    marginTop: 56,
    height: "100%"
  },
  filtersContainer: {
    position: "absolute",
    top: 0,
    height: 533,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalTitle: {
    width: "100%",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#272929",
    position: "absolute",
    top: 34
  },
  filterGroup: {
    width: "100%",
    marginBottom: 40
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
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 53,
    borderTopWidth: 1,
    borderTopColor: "#C4C4C4",
    height: 113,
    position: "absolute",
    width: "100%",
    top: 648,
    left: 0
  },
  resetApplyButton: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#526DC2",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: "45%"
  },
});
