import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-action';
import CollectionsOverviewContainer from '../../Components/collection-overview/collection-overview-container';
import CollectionPageContainer from '../collection/collection-container';


class ShopPage extends React.Component {
    // constructor(){

    // }
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    
        }



render () {
    const {match } =  this.props;

    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`}
           component={CollectionsOverviewContainer}
           />    
        <Route path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer}
             />
    </div>
        
    );
}

}
    


const MapDispatchToProps =dispatch => ({
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
});

export default connect(
    null, 
    MapDispatchToProps
    )(ShopPage);