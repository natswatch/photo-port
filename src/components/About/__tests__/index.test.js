import React from 'react';
// renders the component, and cleanup is used to remove components from DOM to prevent memory leaking 
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);


describe('About component', () => {
    //renders About test
    it('renders', () => {
        render(<About/>);
    });

    it('matches snapshot DOM node structure', ()=> {
        //render About
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})


