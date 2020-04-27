import React from 'react';
import './Palette.css';
import categories from './categories';
//const categories = ['all', 'mouse', 'notebook', 'skin', 'lotions'];

//카테고리 리스트를 받아와서 출력한다
//onclick된거로 값이 바뀐다.
//productList가 onclick된 카테고리로 바뀌려면?
//카테고리 값마다 불러오는 productList가 달라야 한다?
//그렇다면 productList_Category에 각 값마다 달라져야하는 데이터를 json형식으로 저장해두고
//카테고리가 변화하면 안에 list도 그 변화를 감지하고 바뀌어야 한다.
//와우
const CategoryItem = ({ category, active, onClick }) => {
    return (
        <>
            <button
                className={`PaletteItem ${active ? 'active' : ''}`}
                onClick={onClick}
            >
                <p>{category}</p>
            </button>
        </>
    );
};

const Category = ({ selected, onSelect }) => {

    return (
        <div>
            <p>category container</p>
            {categories.map(category => (
                <CategoryItem
                    category={category}
                    active={selected === category}
                    onClick={() => onSelect(category)}
                />
            ))}
        </div>
    )
}
export default Category;
