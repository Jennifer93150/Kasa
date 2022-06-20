import React from 'react';

/** Styles */
import '../styles/banner.css'

function Banner({ children }) {
	return <div className='banner-container'>{children}</div>
}

export default Banner