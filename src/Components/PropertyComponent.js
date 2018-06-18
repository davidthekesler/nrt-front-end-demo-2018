import React, { Component } from 'react';
import propertyArray from './PropertyData';

class PropertyComponent extends Component {

    render() {

        //maps over imported dummy data from ./PropertyData and returns an interable of jsx to be 
        //displayed as HTML.
        let propertyArrayMapped = propertyArray.map((property) => {
            return (
                <div key={property.price} id="propertySection">
                    <div className="imageContainer">
                        <p className="propertyPriceLabel">${(property.price).toLocaleString()}</p>
                        <p className="paragraphs">{property.address}</p>
                        <img className="propertyImage" src={property.image} />
                    </div>
                    <div className="moreInfoContainer">
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="roomsTableColumn">
                                            <p className="labels">Bedrooms:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">{property.bedrooms}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="roomsTableColumn">
                                            <p className="labels">Bathrooms:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">{property.bathrooms}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="moreInfoLine">
                        </div>
                        <div id="moreInfoDiv">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="infoTableColumn">
                                            <p className="labels">Taxes:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">${(property.taxes).toLocaleString()}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="infoTableColumn">
                                            <p className="labels">Status:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">{property.status}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="infoTableColumn">
                                            <p className="labels">Type:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">{property.type}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="infoTableColumn">
                                            <p className="labels">Added:</p>
                                        </td>
                                        <td>
                                            <p className="paragraphs">{property.added}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div id="propertyTitle">
                <p className="titlesText">PROPERTY DETAILS</p>
                {propertyArrayMapped}
            </div>
        )
    }//end render  
}//end PropertyComponent

export default PropertyComponent;