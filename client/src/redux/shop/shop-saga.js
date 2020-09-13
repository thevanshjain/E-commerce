import { all, call, put, takeLatest} from 'redux-saga/effects';
import ShopActionTypes from './shop-types';

import { firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure} from './shop-action';

export function* fetchCollectionsAsync() {
    yield console.log("mc");
    
        try{ 
        const collectionRef =firestore.collection('collections');
        const snapShot= yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap,snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
        }
   
}


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        
    );
}
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
  }
//  collectionRef.get().then(snapshot => {
//     const collectionsMap= convertCollectionSnapshotToMap(snapshot);
//       dispatch(fetchCollectionsSuccess(collectionsMap))
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
