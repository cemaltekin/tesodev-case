let data = [];
fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    data = responseJson.data;
  });
$("#searchBtn").on("click", function () {
  let value = $("#search").val().toLowerCase();
  let filteredDataIndex = [];
  for (let index = 0; index < data.length; index++) {
    filteredDataIndex.push(getAllIndexes(data[index], value));
  }
  let a = filteredDataIndex.lastIndexOf(filterData => filterData.length > 0);
  console.log(a);
});

//   $(`<div
//   class="w-full flex justify-between border-b border-gray-500 cursor-pointer hover:bg-gray-300 p-2 hover:text-white hidden">
//   <div class="flex flex-col gap-2">
//       <h5></h5>
//       <span>Jane Doe - 2016</span>
//   </div>
//   <h5>Email: abc@xyz.com</h5>
// </div>`)
// });
const getAllIndexes = (arr, value) => {
  return arr.map((elm, index) =>
    elm.substring(0, value.length).toLowerCase() === value ? index : ""
  );
};
