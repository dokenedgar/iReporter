let previewFiles = () => {

    let preview = document.querySelector('#preview');
    let files   = document.querySelector('input[type=file]').files;
  
    let readAndPreview = (file) => {
  
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        let reader = new FileReader();
  
        reader.addEventListener("load", function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
  }