function getMessage(a, b) {

  if (typeof a === 'boolean') {

    return getMessageForGif(a, b);

  }

  if (typeof a === 'number') {

    return getMessageForSvg(a, b);

  }

  if (Array.isArray(a)) {

    return ('Количество красных точек во всех строках изображения: [amountOfRedPoints]');

  }

  if (Array.isArray(a, b)) {

    return ('Количество красных точек во всех строках изображения: [amountOfRedPoints]');

  }

  else {

    return ('Переданы некорректные данные');
    
  }
}



function getMessageForGif(a, b) {

  if (a === true) {

    return ('Переданное GIF-изображение анимировано и содержит [b] кадров');

  } else {

    return ('Переданное GIF-изображение не анимировано');

  }

}


function getMessageForSvg(a, b) {
  return ('Переданное сообщение содержит [a] объектов и [b * 4] атрибутов');
}
