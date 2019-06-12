/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from '../redux/store';
import { addProductToOrder } from '../redux/actions/waiter';
import ComponentVisualButton from './componentVisualButton';
import ComponentVisualModal from './componentVisualModal';
import './css/componentVisualMenuOptions.css';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  constructor(props) {
    super(props);
    this.breakfast = this.breakfast.bind(this);
    this.lunch = this.lunch.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.state = {};
    this.modalRef = React.createRef();
  }

  addProduct(product) {
    if (Array.isArray(product) && product[0].types) {
      ReactDOM.render(
        <Provider store={store}>
          <ComponentVisualModal
            types={product[0].types}
            toppings={product[0].toppings}
            product={product[0].product}
            subproduct={product[1].product}
            price={product[1].price}
            ref={this.modalRef}
          />
        </Provider>,
        document.getElementById('modaldiv'),
      );
      this.modalRef.current.handleShow();
    } else {
      this.props.addProduct(product);
    }
  }

  breakfast() {
    this.setState(() => {
      const breakfastElement = menuFile.breakfast.map(product => (
        <ComponentVisualButton
          name={product.product}
          buttonOnClick={(evt) => {
            this.addProduct(product, evt);
          }}
          className="breakfast"
          key={product.product}
        />
      ));
      return { buttons: breakfastElement };
    });
  }

  lunch() {
    this.setState(() => {
      const lunchElement = menuFile.lunch.map(category => (
        <div key={category.categoryName}>
          <h6>{category.categoryName}</h6>
          {category.items.map((menuItem, index) => (
            menuItem.size
              ? (
                <div key={menuItem.product}>
                  <p>{menuItem.product}</p>
                  {menuItem.size.map((size, sizeIndex) => (
                    <ComponentVisualButton
                      key={`${index}_${sizeIndex}`}
                      name={size.product}
                      className="lunch m-1"
                      buttonOnClick={(evt) => { this.addProduct([menuItem, size], evt); }}
                    />
                  ))}
                </div>
              )
              : (
                <ComponentVisualButton
                  key={index}
                  name={menuItem.product}
                  className="lunch m-1"
                  buttonOnClick={(evt) => { this.addProduct(menuItem, evt); }}
                />
              )
          ))}
        </div>
      ));
      return { buttons: lunchElement };
    });
  }

  render() {
    return (
      <>
        <h5>Ingrese la orden</h5>
        <ComponentVisualButton name="Desayuno" className="btnbreakfast m-1" buttonOnClick={this.breakfast} />
        <ComponentVisualButton name="Almuerzo/Cena" className="btnlunch-dinner m-1" buttonOnClick={this.lunch} />
        <div id="menuoptions">
          {this.state.buttons}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  addProduct: addProductToOrder(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentVisualMenuOptions);
