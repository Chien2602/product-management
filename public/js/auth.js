document.addEventListener("DOMContentLoaded", function () {
    const provinceSelect = document.getElementById("province");

    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then(response => response.json())
      .then(data => {
        data.forEach(province => {
          const option = document.createElement("option");
          option.value = province.code;
          option.textContent = province.name;
          provinceSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Error fetching province data:", error);
      });
  });
  