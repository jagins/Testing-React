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

test('previous and next buttons can be clicked', () =>
{
    const {getByText} = render(<StarWarsCharacters/>);
    const nextButton = getByText(/next/i);
    const previousButton = getByText(/previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
});

test('Get data gets called after pressing the buttons and returns Luke Skywalker', async () =>
{
    const {getByText} = render(<StarWarsCharacters/>);
    const nextButton = getByText(/next/i);

    fireEvent.click(nextButton);

    wait(() => expect(getByText(/Luke Skywalker/i)));
})