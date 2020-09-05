import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import './collection-overview-style.scss';

import CollectionPreview from '../Collection_preview/Collection-preview-Component';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector' 
 
const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
       {
       collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
                ))} 
    </div>
);
const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);