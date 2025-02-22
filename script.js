const item = document.querySelectorAll(".item");
const prev = document.querySelector(".arrows .prev");
const next = document.querySelector(".arrows .next");

const firstPosition = 0;
const lastPosition = item.length - 1;
let active = 0;

next.onclick = () => {
  const activeOld = document.querySelector(".item.active");
  activeOld.classList.remove("active");

  active = active + 1 > lastPosition ? 0 : (active += 1);
  item[active].classList.add("active");
};

prev.onclick = () => {
  const activeOld = document.querySelector(".item.active");
  activeOld.classList.remove("active");

  active = active - 1 < firstPosition ? lastPosition : (active -= 1);
  item[active].classList.add("active");
};
