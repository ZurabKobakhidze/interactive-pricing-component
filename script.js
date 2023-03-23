const range = document.getElementById("vol");
const output = document.querySelector("#price_box_desktop");
const outputMobile = document.querySelector("#price_box_mobile");
const greenLine = document.querySelector(".green_line");
const pageViews = document.querySelector(".h2_container");

function setPrice() {
  let price = 0;
  let greenLineWidth = "0%";
  let pageViewsNumber  = "0k";
  switch(parseInt(range.value)) {
    case 0:
      price = 8.00;
      greenLineWidth = "0%";
      pageViewsNumber = "10K PAGEVIEWS";
      break;
    case 1:
      price = 12.00;
      greenLineWidth = "25%";
      pageViewsNumber = "50K PAGEVIEWS";
      break;
    case 2:
      price = 16.00;
      greenLineWidth = "50%";
      pageViewsNumber = "100K PAGEVIEWS";
      break;
    case 3:
      price = 24.00;
      greenLineWidth = "75%";
      pageViewsNumber = "500K PAGEVIEWS";
      break;
    case 4:
      price = 32.00;
      greenLineWidth = "100%";
      pageViewsNumber = "1M PAGEVIEWS";
      break;
    default:
      price = 16.00;
      greenLineWidth = "50%";
      pageViewsNumber = "100K PAGEVIEWS";
      break;
  }
  output.textContent = "$" + price.toFixed(2);
  outputMobile.textContent = "$" + price.toFixed(2);
  greenLine.style.width = greenLineWidth;
  pageViews.textContent = pageViewsNumber;
}

range.addEventListener("input", setPrice);
