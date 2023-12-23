import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    name: 'home',
    text: '홈',
  },
  {
    name: 'Record',
    text: '기록실',
  },
  {
    name: 'SkinGallery',
    text: '스킨갤러리',
  },
  {
    name: 'Champion',
    text: '챔피언',
  },
  {
    name: 'Tactic',
    text: '공략',
  },
  {
    name: 'LOLDB',
    text: 'LOLDB',
  },
];

const Categories = ({ onSelect }) => {
  return (
    // <CategoriesBlock>
    //   console.log(c.name);

    // </CategoriesBlock>
    <>
      {categories.map((c) => (
        <NavLink
          className="category-basic"
          key={c.name}
          activeClassName="active"
          exact={c.name === 'home'}
          to={c.name === 'home' ? '/' : `/${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </>
  );
};

export default Categories;
