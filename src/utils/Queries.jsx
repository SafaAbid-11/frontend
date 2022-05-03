import { gql } from "@apollo/client"; 

const BUY_CARDS  = gql`
  
  query GET_BUY_CARDS {
  houses(
    filters: { categories: { Category: { contains: "Buy" } } }
    pagination: { limit: 6 }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              City
            }
          }
        }
        preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        price
        Rent
        Short_Adress
        Neiberhood
      }
    }
  }
}`;


const RENT_CARDS  = gql`
  
  query GET_RENT_CARDS {
  houses(
    filters: { categories: { Category: { contains: "Rent" } } }
    pagination: { limit: 6 }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              City
            }
          }
        }
        Preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        Rent
        Short_Adress
        Neiberhood
        
      }
    }
  }
}`;

const ID_CARDS  = gql`
  query GET_ID_CARDS($id: ID) {
  houses(
    filters: { id: { eq: $id}  }
  ) {
    data {
      id
      attributes {
        location {
          data {
            attributes {
              City
            }
          }
        }
        Preview_Image {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Category
            }
          }
        }
        Street
        Rooms
        Bedrooms
        Bathrooms
        price
        Short_Adress
        Neiberhood
        Description
      }
    }
  }
}`;

export {BUY_CARDS,RENT_CARDS, ID_CARDS};