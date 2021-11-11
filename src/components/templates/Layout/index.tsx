import React, { ReactChild } from 'react';

import * as  styles from './Layout.module.css';
 
type Props = {
	children: ReactChild
}

const Layout = ({children}: Props) => {
 
	return (
		<main className={styles.pageStyles}>
			{children}
		</main>
	);
}
 
export default Layout;