const getDataFromApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const extractKeys = (data) => Object.keys(data);

const extractStates = (data) => {
  const states = [];

  Object.entries(data).forEach(([key, value]) => {
    if (key !== "State Unassigned") {
      states.push({
        name: key,
        code: value.statecode,
      });
    }
  });

  return states;
};

const extractDistrictsOfAState = (stateData) => {
  return extractKeys(stateData);
};

const flattenStateData = (stateData) => {
  const data = {
    active: 0,
    confirmed: 0,
    deceased: 0,
    recovered: 0,
  };

  const blackList = ["Others", "State Pool", "Unknown"];

  Object.entries(stateData).forEach(([key, value]) => {
    if (!blackList.includes(key)) {
      data.active += value["active"];
      data.confirmed += value["confirmed"];
      data.deceased += value["deceased"];
      data.recovered += value["recovered"];
    }
  });

  return data;
};

const formatNumber = (number) => {
  // 234 -> 234
  // 1234 -> 1,234
  // 2343455 -> 23,43,455

  // d{2}*d{3}

  return ``;
};
