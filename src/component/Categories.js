import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';

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

const recordLower = [
  {
    name: 'my record',
    text: '내 대전기록',
  },
  {
    name: 'hovermenu2',
    text: '메뉴하나더',
  },
];

const Categories = () => {
  return (
    // <CategoriesBlock>
    //   console.log(c.name);

    // </CategoriesBlock>
    <>
      <nav>
        <ul className="category-basic">
          {categories.map((c) => (
            <li key={c.name}>
              <NavLink
                activeclassname="active"
                to={c.name === 'home' ? '/' : `/${c.name}`}
              >
                <span>{c.text}</span>
              </NavLink>
              {c.dropdown === 'true'
                ? recordLower.map((c) => <ol key={c.name}>{c.name}</ol>)
                : ''}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Categories;
