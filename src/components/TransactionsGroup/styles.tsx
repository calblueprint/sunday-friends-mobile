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
});
