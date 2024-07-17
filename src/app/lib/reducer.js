const CHANGE_STATUS = 'CHANGE_STATUS'

const initialState = {
  leads: [
    {
      name: "jialiang",
      submitted: "2024-07-01",
      status: "pending",
      country: "US"
    },
    {
      name: "david",
      submitted: "2024-07-02",
      status: "reached out",
      country: "CA"
    }
  ]
};

const leadReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        leads: state.leads.map((lead, index) => 
          index === action.payload 
            ? { ...lead, status: lead.status === 'pending' ? 'reached out' : 'pending' }
            : lead
        )
      };
    default:
      return state;
  }
};

export default leadReducer;