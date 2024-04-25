import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"
import Categories from "./components/Categories";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items:[
        {"id": 1,
     "title": "Стол обеденный",
     "img": "https://static.insales-cdn.com/r/kC6PvNAhUMo/rs:fit:1000:0:1/q:100/plain/images/products/1/1995/457525195/140_102_211-interior.jpg@jpg",
     "desc": "Прочный и стильный стол для обеда",
     "category": "tables",
     "price": 5000},
    {"id": 2,
     "title": "Стул кухонный",
     "img": "https://vishop.by/upload/iblock/087/087d4370b0565dc82299c3da8147e851.jpg",
     "desc": "Комфортный стул для кухни",
     "category": "chairs",
     "price": 1500},
    {"id": 3,
     "title": "Диван угловой",
     "img": "https://www.stolplit.ru/upload/resize_cache/iblock/04a/b3ui8c5mbatd1dqvy0nin9up31czld56/816_700_1/i0000236292_detail.webp",
     "desc": "Уютный угловой диван для гостиной",
     "category": "sofa",
     "price": 12000},
    {"id": 4,
     "title": "Шкаф гардеробный",
     "img": "https://www.lmebel.ru/upload/resize_cache/webp/iblock/f12/500_500_2/5fxvwuw5b4zn7f5jdtbqxr8tb2icb7k1.webp",
     "desc": "Просторный шкаф для хранения одежды",
     "category": "cupboard",
     "price": 8000},
    {"id": 5,
     "title": "Кровать двуспальная",
     "img": "https://cdn.domdivanov.com/files/imgs/ig1111928/krovat-s-mehanizmom-tokio-1600-ekonom-dno-ldsp-8-740x540.jpg",
     "desc": "Удобная и красивая кровать для спальни",
     "category": "bed",
     "price": 10000},
    {"id": 6,
     "title": "Комод прикроватный",
     "img": "https://ваш-мастер-мебели.рф/wp-content/uploads/2020/05/%D0%9A%D0%BE%D0%BC%D0%BE%D0%B4-Arno.jpg",
     "desc": "Компактный комод для хранения вещей",
     "category": "dressers",
     "price": 6000},
    {"id": 7,
     "title": "Стол письменный",
     "img": "https://static.insales-cdn.com/images/products/1/4062/340791262/dms-sp014B-K017-interior.jpg",
     "desc": "Удобный стол для работы и учебы",
     "category": "tables",
     "price": 4500},
    {"id": 8,
     "title": "Кресло офисное",
     "img": "https://stullio.ru/assets/img/product/IMG_707_light_grey_800_N1.jpg",
     "desc": "Эргономичное кресло для офиса",
     "category": "armchairs",
     "price": 7000},
    {"id": 9,
     "title": "Полка для книг",
     "img": "https://images.prom.ua/4503494378_w640_h640_polka-dlya-knig.jpg",
     "desc": "Практичная полка для хранения книг и декора",
     "category": "shelves",
     "price": 2000},
    {"id": 10,
     "title": "Кухонный столешница",
     "img": "https://content.nebo.by/photos/mebel/big/43076-56278-kuhni.jpg",
     "desc": "Столешница из натурального камня для кухни",
     "category": "tabletops",
     "price": 9000}
      ]
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)

  }
  render(){
    return (
     <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      <Footer/>
     </div>
  );
}

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return  
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
