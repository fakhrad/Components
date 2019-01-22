// __tests__/Intro-test.js
import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from '../index'

describe('Spinner', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Spinner />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
