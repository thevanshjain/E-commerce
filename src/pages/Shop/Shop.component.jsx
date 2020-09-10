import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../Components/collection-overview/collection-overview-component';
import CollectionPage from '../collection/collection-component';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-action';
import withSpinner from '../../Components/with-spinner/with-spinner-component';


const CollectionsOverviewWithSpinner= withSpinner(CollectionsOverview);
const CollectionsPageWithSpinner= withSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
                loading:true
        };
    


    unsubscribeFromSnapShot =null;
    componentDidMount() {
        const {updateCollections} = this.props;
            const collectionRef =firestore.collection('collections');
           
            
            collectionRef.get().then(snapshot => {
                const collectionsMap= convertCollectionSnapshotToMap(snapshot);
               updateCollections(collectionsMap);
               this.setState({loading: false});
               });
            
    
        }



render () {
    const {match} =  this.props;
    const {loading} =this.state;
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`}
          render={props => ( 
          <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
          )} />    
        <Route path={`${match.path}/:collectionId`} 
        render={(props) =>(
             <CollectionsPageWithSpinner isLoading={loading} {...props} />
        )}
             />
    </div>
        
    );
}

}
    
const MapDispatchToProps =dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
});

export default connect(
    null, 
    MapDispatchToProps
    )(ShopPage);