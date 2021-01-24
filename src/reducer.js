import avneesh_img from './images/avneesh.jpg'

export const initialState = {
    basket: [
    //     {
    //     id:"122",
    //     title:"Pen must have an alt prop, either with meaningful text, or an empty string for decorativ",
    //     price:"40",
    //     rating:"5",
    //     image:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

    // }
],
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            return { ...state }
            break;
        default:
            return state;

    }
}

export default reducer;