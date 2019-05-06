import React from 'react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import { SearchBar } from './SearchBar';

Enzyme.configure({ adapter: new Adapter() })


describe('SearchBar renders',() => {

  it('SearchBar component created', () => {
    const rendered = renderer.create(
      <SearchBar
        placeholder="search..."
        query="hi there"
      />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  })
})