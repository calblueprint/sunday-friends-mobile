import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    backgroundColor: "#FAFAFA",
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    width: '33.3333%',
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 11,
    fontSize: 14,
    color: '#272929',
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
  withClear: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
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
    padding: 12,
  },
  filterBtnText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
  },
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dateInput: {
    width: "45%",
    borderWidth: 1.5,
    borderColor: "#F7F7F7",
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    marginVertical: 5,
    padding: 12,
  },
  dateText: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: '#525454'
  },
  to: {
    color: '#A9A9A9',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Avenir',
    fontWeight: '800',
    width: "10%"
  },
  memberBtn: {
    width: "49%",
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
    marginVertical: 5,
    padding: 12,
  },
  selectedInput: {
    borderColor: '#7F93D1',
    backgroundColor: "#E6ECFE"
  },
  unselectedInput: {
    borderColor: '#F7F7F7'
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
