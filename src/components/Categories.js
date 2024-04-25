import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'chairs', 
                    name: 'Стулья'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'cupboard',
                    name: 'Шкафы'
                },
                {
                    key: 'bed',
                    name: 'Кровать'
                },
                {
                    key: 'dressers',
                    name: 'Комоды'
                },
                {
                    key: 'armchairs',
                    name: 'Кресла'
                },
                {
                    key: 'shelves',
                    name: 'Полки'
                },
                {
                    key: 'tabletops',
                    name: "Столешницы" 
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.name} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories