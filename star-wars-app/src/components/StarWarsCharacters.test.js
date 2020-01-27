import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import {getData as mockGetData} from '../api';


test('renders previous and next buttons', () =>
{
    const {getByText} = render(<StarWarsCharacters/>);
    getByText(/next/i);
    getByText(/previous/i);
});