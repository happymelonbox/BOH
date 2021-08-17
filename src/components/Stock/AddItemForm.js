import React from 'react'

class AddItemForm extends React.Component{
    handleInput = (event) => {
        this.props.handleAddStock(event)
    }
    submitItem = (event) => {
        event.preventDefault()
        this.props.handleSubmitStock(event)
    }
    render(){

        return(
            <div className="stock-add-stock-item-container-div">
                <h4 className="stock-add-stock-item-container-title">Add New Supplier Item</h4>
                <div className="stock-add-stock-item-form-container">
                    <form className="stock-add-stock-item-form" onSubmit={this.submitItem}>
                    <input className="stock-add-stock-item-input" type="text" placeholder="Item Name" name="name" onBlur={this.handleInput}/>
                    <input className="stock-add-stock-item-input" type="text" placeholder="Item Brand" name="brand" onBlur={this.handleInput}/>
                    <input className="stock-add-stock-item-input" type="text" placeholder="Supplied By..." name="supplier" onBlur={this.handleInput}/>
                    <input className="stock-add-stock-item-input" type="number" placeholder="How many?" name="quantity" onBlur={this.handleInput}/>
                    <input className="stock-add-stock-item-input" type="text" placeholder="Unit of Measurement" name="unit" onBlur={this.handleInput}/>
                    <input className="stock-add-stock-item-input" type="text" placeholder="Price per unit" name="price_per_unit" onBlur={this.handleInput}/>
                    <select className="stock-add-stock-item-select" name="location" id="location" onChange={this.handleInput}>
                        <option className="stock-add-stock-item-option">Select a location</option>
                        <option className="stock-add-stock-item-option">Coolroom</option>
                        <option className="stock-add-stock-item-option">Freezer</option>
                        <option className="stock-add-stock-item-option">Dry Store</option>
                    </select>
                    <button className="stock-add-stock-item-button">Submit new supplier item</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddItemForm