window.addEventListener('paste', e => {
    var items = e.clipboardData.items;
    var blob = null;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }
    }

    if (blob !== null) {
      var fileFromBlob = new File([blob], 'your-filename.jpg');
      var reader = new FileReader();
      reader.onload = (evt) => {
        document.getElementById('imagem').src = evt.target.result;
      };
      reader.readAsDataURL(blob);
    }
});
