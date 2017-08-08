export var collectPropCocktails = () => {
  return(dispatch, getState) => {
    const propKey = getState().property.key;
    //pull from firebase
    return firebaseRef.child(`/property-cocktails/${propKey}`).on('child_added', (snapshot) => {
      firebaseRef.child(`/cocktails/${snapshot.val()}`).once('value', (cShot) => {
        dispatch(addBeverage({
          ...cShot.val(),
          id: snapshot.val()
        }))
      })
    })
  }
}
