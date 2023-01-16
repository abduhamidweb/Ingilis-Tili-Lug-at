import React from 'react';
import { Link } from 'react-router-dom';

const UnitLink = ({unit,link}) => {
    return (
      <>
            <Link to={`/${link}`} className='unit__link'>{unit }</Link>
      </>
    )
};

export default UnitLink;