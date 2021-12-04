const initialState = {
    list: []
  };
  

const starWarReducer = (state = initialState, action) => {
        const {type,payload}=action
        switch (type) {
            case "StarWarItems": return {
                list:[...payload]
            }
            case "AddError": return payload
            default:
                return state;
            
        }

  }

export default starWarReducer