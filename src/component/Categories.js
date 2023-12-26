import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';
import Subcategories from './Subcategories';
import { useState } from 'react';

const categories = [
  {
    name: 'home',
    text: '홈',
    dropdown: 'false',
  },
  {
    name: 'Record',
    text: '기록실',
    dropdown: 'true',
  },
  {
    name: 'SkinGallery',
    text: '스킨갤러리',
    dropdown: 'false',
  },
  {
    name: 'Champion',
    text: '챔피언',
    dropdown: 'true',
  },
  {
    name: 'Tactic',
    text: '공략',
    dropdown: 'false',
  },
  {
    name: 'LOLDB',
    text: 'LOLDB',
    dropdown: 'true',
  },
];

const Categories = () => {
  const [dropDownTF, setDropdownStatus] = useState(false);

  const dropDown = (e, name) => {
    console.log('dropDown!!');
    console.log(name);
    setDropdownStatus(true);
  };

  const dropUp = (e, name) => {
    console.log('dropUp!!');
    console.log(name);
    setDropdownStatus(false);
  };

  return (
    // <CategoriesBlock>
    //   console.log(c.name);

    // </CategoriesBlock>
    <>
      <nav>
        <ul className="category-basic">
          {categories.map((c) => (
            <li
              key={c.name}
              className="dropli"
              //   onMouseEnter={dropDown}
              onMouseLeave={(e) => dropUp(e, c.name)}
              onMouseEnter={(e) => dropDown(e, c.name)}
            >
              <NavLink
                activeclassname="active"
                to={c.name === 'home' ? '/' : `/${c.name}`}
              >
                <span>{c.text}</span>
              </NavLink>
              {/* {c.dropdown === 'true'
                ? recordLower.map((c) => <ol key={c.name}>{c.name}</ol>)
                : undefined} */}
              {dropDownTF && <Subcategories name={c.name} />}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Categories;
