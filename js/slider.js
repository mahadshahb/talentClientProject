var i = 0; //first slide

var slides = document.getElementsByClassName("slidesFirst");
var slideCount = slides.length;

//Position last slide on left of first slide
slides[slideCount - 1].style.left = "-100%";

function moveLeft(e) {
  e.preventDefault();
  i++; // i standing for the index of the current slide i = i + 1
  if (i < slideCount) {
    // for all slides
    slides[i].style.visibility = "visible"; // Set current slide to visible
    slides[i - 1].style.left = "-100%"; // move previous slide
    slides[i].style.left = "0"; // move current slide to center

    console.log("advance, i = " + i);
  } else {
    // if i exceeds slidecount, then set back to 0
    i = 0; // SET CURRENT SLIDE BACK TO 0
    slides[i].style.visibility = "visible"; // set current slide visible
    slides[slideCount - 1].style.left = "-100%"; //move last slide to left
    slides[i].style.left = "0"; //move first slide to center

    console.log("back to start, i = " + i);

    // RESET ALL OTHER SLIDES
    for (var x = 1; x < slides.length - 1; x++) {
      slides[x].style.visibility = "hidden"; // hide during reset
      slides[x].style.left = "100%"; //move all slides back to start position
    }
  }
  if (i === slideCount - 1) {
    // reset slide 0 on last slide
    slides[0].style.visibility = "hidden";
    slides[0].style.left = "100%";
  }
  if (i === slideCount - 2) {
    // reset last slide just before it's turn
    slides[slideCount - 1].style.visibility = "hidden";
    slides[slideCount - 1].style.left = "100%";
  }
}

function moveRight(e) {
  e.preventDefault();
  if (i > 0) {
    // THIS CHANGES FROM i < slideCount // run code for slides 1 and higher
    i--; // decrease value of i by one
    slides[i].style.visibility = "visible"; // current slide visible
    slides[i + 1].style.left = "100%"; //THIS CHANGES FROM i -1 // move previous slide to the right
    slides[i].style.left = "0"; // move current slide to center
  } else {
    // if current slide is 0, last slide becomes current slide

    // SET CURRENT SLIDE to LAST SLIDE
    i = slideCount - 1; // CHANGES FROM i = 0 // set current slide to last slide
    slides[i].style.visibility = "visible"; // current slide visible
    slides[0].style.left = "100%"; // move first slide right
    slides[i].style.left = "0"; // move last slide center

    console.log("end, i = " + i);

    // RESET ALL OTHER SLIDES
    for (var x = 1; x < slides.length - 1; x++) {
      slides[x].style.visibility = "hidden"; // set to invisible while reseting
      slides[x].style.left = "-100%"; // all other slides go to left
    }
  }
  if (i === 1) {
    //move first slide back to left
    slides[0].style.visibility = "hidden";
    slides[0].style.left = "-100%";
  }
  if (i === 0) {
    //move last slide back to left
    slides[slideCount - 1].style.visibility = "hidden";
    slides[slideCount - 1].style.left = "-100%";
  }
}

document.getElementById("prev").onclick = moveRight;

var nextBut = document.getElementById("next");
nextBut.onclick = moveLeft;

// ......popup...........//

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}
function myFunction3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show");
}
function myFunction4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show");
}
function myFunction5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show");
}
function myFunction6() {
  var popup6 = document.getElementById("myPopup6");
  popup6.classList.toggle("show");
}

// .....para-more-less-Worker

function myFunctionPara() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "...More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "...Less";
    moreText.style.display = "inline";
  }
}

// .....image-more-less-Worker

function myFunctionImage() {
  var dots = document.getElementById("dost-image");
  var moreText = document.getElementById("more-images");
  var btnText = document.getElementById("myImageBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "...More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "...Less";
    moreText.style.display = "inline";
  }
}


// ....image-modal-Selection.............

var modal = document.getElementById('myModal');

var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}



// .....img-slider..mobile.....

// 'use strict';
        var multiItemSlider = (function () {
            return function (selector, config) {
                var
                    _mainElement = document.querySelector(selector), 
                    _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), 
                    _sliderItems = _mainElement.querySelectorAll('.slider__item'), 
                    _sliderControls = _mainElement.querySelectorAll('.slider__control'),
                    _sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
                    _sliderControlRight = _mainElement.querySelector('.slider__control_right'), 
                    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
                    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),   
                    _positionLeftItem = 0, 
                    _transform = 0, 
                    _step = _itemWidth / _wrapperWidth * 100, 
                    _items = []; 

                _sliderItems.forEach(function (item, index) {
                    _items.push({ item: item, position: index, transform: 0 });
                });

                var position = {
                    getItemMin: function () {
                        var indexItem = 0;
                        _items.forEach(function (item, index) {
                            if (item.position < _items[indexItem].position) {
                                indexItem = index;
                            }
                        });
                        return indexItem;
                    },
                    getItemMax: function () {
                        var indexItem = 0;
                        _items.forEach(function (item, index) {
                            if (item.position > _items[indexItem].position) {
                                indexItem = index;
                            }
                        });
                        return indexItem;
                    },
                    getMin: function () {
                        return _items[position.getItemMin()].position;
                    },
                    getMax: function () {
                        return _items[position.getItemMax()].position;
                    }
                }

                var _transformItem = function (direction) {
                    var nextItem;
                    if (direction === 'right') {
                        _positionLeftItem++;
                        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
                            nextItem = position.getItemMin();
                            _items[nextItem].position = position.getMax() + 1;
                            _items[nextItem].transform += _items.length * 100;
                            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                        }
                        _transform -= _step;
                    }
                    if (direction === 'left') {
                        _positionLeftItem--;
                        if (_positionLeftItem < position.getMin()) {
                            nextItem = position.getItemMax();
                            _items[nextItem].position = position.getMin() - 1;
                            _items[nextItem].transform -= _items.length * 100;
                            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                        }
                        _transform += _step;
                    }
                    _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
                }

                var _controlClick = function (e) {
                    var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
                    e.preventDefault();
                    _transformItem(direction);
                };

                var _setUpListeners = function () {
                    _sliderControls.forEach(function (item) {
                        item.addEventListener('click', _controlClick);
                    });
                }

                _setUpListeners();

                return {
                    right: function () { 
                        _transformItem('right');
                    },
                    left: function () { 
                        _transformItem('left');
                    }
                }

            }
        }());

        var slider = multiItemSlider('.sliderone1')

