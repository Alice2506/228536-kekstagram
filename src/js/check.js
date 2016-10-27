function getMessage(a, b) {
  if (typeof a === 'boolean') {
    return getMessageForGif(a, b);
  }

  if (typeof a === 'number') {
    return getMessageForSvg(a, b);
  }

  if (Array.isArray(a)) && typeof b === 'boolean' || 'number' {
    return 'Количество красных точек во всех строках изображения: ' + amountOfRedPoints(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return 'Общая площадь артефактов сжатия: ' + artifactsSquare(a, b) + ' пикселей';
  }

  else {
    return 'Переданы некорректные данные';
  }
}

function getMessageForGif(a, b) {
  if (a === true) {
    return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';

  } else {
    return 'Переданное GIF-изображение не анимировано';
  }
}

function getMessageForSvg(a, b) {
  return 'Переданное сообщение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
}

var amountOfRedPoints = function(a) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    resultForAmount = result + arr[i];
  }

  return resultForAmount;
};

var artifactsSquare = function (a, b) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
  resultForArtifacts = result + a[i] * b[i];
}
return resultForArtifacts;
}
