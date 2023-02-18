import * as React from 'react';

import UnderlineLink from '../links/UnderlineLink';

export default function Footer() {
    return (
        <footer className='bottom-2 text-gray-700 w-screen flex flex-col items-center justify-center py-12 text-center bg-red-50'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
            </UnderlineLink>
        </footer>
    );
}