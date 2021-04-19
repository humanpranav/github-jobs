const initial_state = {
  jobs: [],
  filteredJobs: [],
};

const job_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "fetchJobs": {
      return {
        ...state,

        jobs: action.payload,
        filteredJobs: action.payload,
      };
    }
    case "filterJobs": {
      return {
        ...state,
        filteredJobs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default job_reducer;
