let elItem = document.querySelectorAll(".item")

const data = [
    {
      price: "4$",
      type: "Kartoshka",
    },
    {
      price: "5$",
      type: "Tovuq",
    },
    {
      price: "6$",
      type: "Go'sht",
    },
  ]

const blockUser1 = prompt("kimni kirgizmimiz")
const blockUser2 = prompt("kimni kirgizmimiz")

const userName = prompt("Ismingizning yozing")

if(userName === blockUser1 || userName === blockUser2 ) {
    elItem.textContent = alert("kirish mumkin emas")
} else {
    elItem[0].textContent = data[0].price
    elItem[1].textContent = data[1].price
    elItem[2].textContent = data[2].price
}
