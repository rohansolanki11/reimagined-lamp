function formSubmission2() {

}

const countryStateMap = {
  "USA": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    "District of Columbia"  // Washington D.C.
  ],
  "India": [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    // Union Territories
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Lakshadweep"
  ],
  "UK": [
    "England", "Scotland", "Wales", "Northern Ireland",
    // Territories
    "Guernsey", "Jersey", "Isle of Man"  // Crown dependencies (not part of the UK proper)
  ],
  "Canada": [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
    // Territories
    "Northwest Territories", "Nunavut", "Yukon"
  ],
  "Australia": [
    "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia",
    "Tasmania", "Australian Capital Territory", "Northern Territory",
    // External Territories
    "Christmas Island", "Cocos (Keeling) Islands", "Norfolk Island"
  ],
  "Germany": [
    "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg",
    "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia",
    "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein",
    "Thuringia"
  ],
  "France": [
    "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire",
    "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine",
    "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur",
    // Overseas Regions
    "Guadeloupe", "Martinique", "French Guiana", "Réunion", "Mayotte", "Saint Pierre and Miquelon"
  ],
  "Japan": [
    "Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima",
    "Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa",
    "Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano",
    "Gifu", "Shizuoka", "Aichi", "Mie", "Shiga", "Kyoto", "Osaka", "Hyogo",
    "Nara", "Wakayama", "Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi",
    "Tokushima", "Kagawa", "Ehime", "Kochi", "Fukuoka", "Saga", "Nagasaki", "Kumamoto",
    "Oita", "Miyazaki", "Kagoshima", "Okinawa"
  ],
  "China": [
    "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi",
    "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hong Kong", "Hubei",
    "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin", "Liaoning",
    "Macau", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi",
    "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang",
    // Autonomous Regions
    "Tibet Autonomous Region", "Xinjiang Uygur Autonomous Region"
  ],
  "Brazil": [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
    "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
  ]
};

function updateStates() {
  const country = document.querySelector("#country").value;
  const stateList = countryStateMap[`${country}`] || [];

  const stateElement = document.querySelector("#state");
  while (stateElement.firstChild) {
    stateElement.removeChild(stateElement.firstChild);
  }
  for (let i = 0; i < stateList.length; i++) {
    const option = document.createElement("option");
    option.value = stateList[i];
    option.textContent = stateList[i];
    stateElement.appendChild(option);
  }
}

updateStates();
document.querySelector("#country").addEventListener("change", () => {
  // console.log("country changed");
  updateStates();
});

document.querySelector("#submitBtn").addEventListener("click",(event)=>{
  const form = document.querySelector("form");
  if (!form.checkValidity()) {
    form.reportValidity(); // Show validation messages
    return;
  }
  event.preventDefault();
  const formData = {};
  formData.firstName = localStorage.firstName;
  formData.email = localStorage.email;
  formData.phone = localStorage.phone;
  formData.orgName = document.querySelector("#orgName").value;
  formData.address1 = document.querySelector("#address1").value;
  formData.address2 = document.querySelector("#address2").value;
  formData.country = document.querySelector("#country").value;
  formData.state = document.querySelector("#state").value;
  formData.city = document.querySelector("#city").value;
  formData.pincode = document.querySelector("#pincode").value;

  console.log(JSON.stringify(formData));
  
  delete localStorage.firstName;
  delete localStorage.email;
  delete localStorage.phone;

  window.alert("Form Submitted!");
})
