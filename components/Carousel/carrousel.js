var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
export const carousel = () => slide(slider, sliderItems, prev, next);
slide(slider, sliderItems, prev, next);
function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetHeight,//offsetWidth
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetTop; //offsetLeft
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientY; //clientX
    } else {
      posX1 = e.clientY; //clientX
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientY; //clientX
      posX1 = e.touches[0].clientY; //clientX
    } else {
      posX2 = posX1 - e.clientY; //clientX
      posX1 = e.clientY; //clientX
    }
    // items.style.left = (items.offsetLeft - posX2) + "px";
    items.style.top = (items.offsetTop - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetTop; //offsetLeft
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
    //   items.style.left = (posInitial) + "px";
    items.style.top = (posInitial) + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetTop; } //offsetLeft
      if (dir == 1) {
        // items.style.left = (posInitial - slideSize) + "px";
        items.style.top = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        // items.style.left = (posInitial + slideSize) + "px";
        items.style.top = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');
    if (index == -1) {
    //   items.style.left = -(slidesLength * slideSize) + "px";
    items.style.top = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
    //   items.style.left = -(1 * slideSize) + "px";
    items.style.top = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}