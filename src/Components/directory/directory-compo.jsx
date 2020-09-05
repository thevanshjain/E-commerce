import React from 'react';
import {connect} from 'react-redux';
import MenuItems from '../menu-items/menu-items-compo';
import './directory-styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory-selector'
const Directory = ({sections}) => (
        <div className="directory-menu">
            {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItems key={id} {...otherSectionProps} />
            ))
        }
        </div>
    );
    
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);