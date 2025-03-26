document.addEventListener("DOMContentLoaded", () => {
  // Находим элемент, но сначала проверяем его наличие
  const scrollEl = document.querySelector("#horizontal-scroll");

  // Если элемент не найден, прекращаем выполнение скрипта
  if (!scrollEl) {
    console.log("Элемент #horizontal-scroll не найден на странице");
  } else {
    // Весь код выполняется только если элемент найден

    // скроллим
    scrollEl.addEventListener("mouseenter", () => {
      scrollEl.addEventListener("wheel", horizontalScrollHandler, {
        passive: false,
      });
    });

    scrollEl.addEventListener("mouseleave", () => {
      scrollEl.removeEventListener("wheel", horizontalScrollHandler);
    });

    function horizontalScrollHandler(e) {
      e.preventDefault();

      const isScrollable = scrollEl.scrollWidth > scrollEl.clientWidth;
      if (!isScrollable) return;

      scrollEl.scrollLeft += e.deltaY;
    }

    // драгаем
    let isDragging = false;
    let startX;
    let scrollLeft;

    scrollEl.addEventListener("mousedown", (e) => {
      isDragging = true;
      scrollEl.classList.add("dragging");
      startX = e.pageX - scrollEl.offsetLeft;
      scrollLeft = scrollEl.scrollLeft;
    });

    scrollEl.addEventListener("mouseup", () => {
      isDragging = false;
      scrollEl.classList.remove("dragging");
    });

    scrollEl.addEventListener("mouseleave", () => {
      isDragging = false;
      scrollEl.classList.remove("dragging");
    });

    scrollEl.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollEl.offsetLeft;
      const walk = (x - startX) * 1.5; // скорость прокрутки
      scrollEl.scrollLeft = scrollLeft - walk;
    });
  }
});

// const scrollEl = document.querySelector('#horizontal-scroll');

// // скроллим
// scrollEl.addEventListener('mouseenter', () => {
//   scrollEl.addEventListener('wheel', horizontalScrollHandler, {
//     passive: false,
//   });
// });

// scrollEl.addEventListener('mouseleave', () => {
//   scrollEl.removeEventListener('wheel', horizontalScrollHandler);
// });

// function horizontalScrollHandler(e) {
//   e.preventDefault();

//   const isScrollable = scrollEl.scrollWidth > scrollEl.clientWidth;
//   if (!isScrollable) return;

//   scrollEl.scrollLeft += e.deltaY;
// }

// // драгаем
// let isDragging = false;
// let startX;
// let scrollLeft;

// scrollEl.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   scrollEl.classList.add('dragging');
//   startX = e.pageX - scrollEl.offsetLeft;
//   scrollLeft = scrollEl.scrollLeft;
// });

// scrollEl.addEventListener('mouseup', () => {
//   isDragging = false;
//   scrollEl.classList.remove('dragging');
// });

// scrollEl.addEventListener('mouseleave', () => {
//   isDragging = false;
//   scrollEl.classList.remove('dragging');
// });

// scrollEl.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - scrollEl.offsetLeft;
//   const walk = (x - startX) * 1.5; // скорость прокрутки
//   scrollEl.scrollLeft = scrollLeft - walk;
// });
