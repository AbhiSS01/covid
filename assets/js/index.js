const navigationElement = document.querySelector("nav");
const tableData = document.querySelector("#table-states-data tbody");

// render navigation
if (navData) {
  navData.forEach((nav) => {
    const item = document.createElement("li");

    item.innerHTML = `<a href="${nav.path}">${nav.label}</a>`;

    navigationElement.appendChild(item);
  });
}

(async () => {
  const data = await getDataFromApi(API_URL);
  const states = extractStates(data);

  // append a dropdown menu in DOM using this states

  // make table dynamic
  tableData.innerHTML = ``;

  states.forEach((state) => {
    // flatten state data
    const stats = flattenStateData(data[state.name].districtData);
    // insert state data in DOM
    tableData.innerHTML += `
        <tr>
          <td>
            <a href="/${state.code}">${state.name}</a>
          </td>
          <td>${stats.active}</td>
          <td>${stats.confirmed}</td>
          <td>${stats.deceased}</td>
          <td>${stats.recovered}</td>
        </tr>`;
  });
})();
