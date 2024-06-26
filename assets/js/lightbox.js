import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.js";
import PhotoSwipe from "./photoswipe/photoswipe.esm.js";
import * as params from "@params";
import ExifReader from 'exifreader';

const gallery = document.getElementById("gallery");

if (gallery) {
  const lightbox = new PhotoSwipeLightbox({
    gallery,
    children: ".gallery-item",
    showHideAnimationType: "zoom",
    bgOpacity: 0.9,
    pswpModule: PhotoSwipe,
    close: false,
    zoom: false,
    arrowPrev: false,
    arrowNext: false,
    errorMsg: params.errorMsg,
  });
  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'shutter-speed',
      order: 11,
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" id="speed_icon" fill="white"><path d="M6.38231 5.9681C7.92199 4.73647 9.87499 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 10.875 3.73647 8.92199 4.9681 7.38231L3.51472 5.92893L4.92893 4.51472L6.38231 5.9681ZM12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20ZM13 12H16L11 18.5V14H8L13 7.4952V12ZM8 1H16V3H8V1Z"></path></svg><p></p>',
    });
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'focal-length',
      order: 10,
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" id="length_icon" fill="white"><path d="M6.34323 14.728L3.5148 17.5565L7.05033 21.092L20.4854 7.65696L16.9498 4.12143L14.8285 6.24275L16.2427 7.65696L14.8285 9.07118L13.4143 7.65696L11.293 9.77828L13.4143 11.8996L12.0001 13.3138L9.87876 11.1925L7.75744 13.3138L9.17165 14.728L7.75744 16.1422L6.34323 14.728ZM17.6569 2.00011L22.6067 6.94986C22.9972 7.34038 22.9972 7.97354 22.6067 8.36407L7.75744 23.2133C7.36692 23.6038 6.73375 23.6038 6.34323 23.2133L1.39348 18.2636C1.00295 17.873 1.00295 17.2399 1.39348 16.8494L16.2427 2.00011C16.6332 1.60958 17.2664 1.60958 17.6569 2.00011Z"></path></svg><p></p>',
    });
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'aperture',
      order: 9,
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" id="aperture_icon" fill="white"><path d="M9.85802 19.71L12 16H5.07026C6.10692 17.7921 7.8188 19.1447 9.85802 19.71ZM4.25204 14H8.5359L5.07103 7.99867C4.38987 9.17566 4 10.5423 4 12C4 12.6906 4.08751 13.3608 4.25204 14ZM6.39496 6.29179L8.5359 10L12 4C9.8171 4 7.8384 4.87429 6.39496 6.29179ZM14.142 4.28998L12 8H18.9297C17.8931 6.20791 16.1812 4.85529 14.142 4.28998ZM19.748 10H15.4641L18.929 16.0013C19.6101 14.8243 20 13.4577 20 12C20 11.3094 19.9125 10.6392 19.748 10ZM17.605 17.7082L15.4641 14L12 20C14.1829 20 16.1616 19.1257 17.605 17.7082ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13.1547 10H10.8453L9.6906 12L10.8453 14H13.1547L14.3094 12L13.1547 10Z"></path></svg><p></p>',
    });
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'iso',
      order: 8,
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" id="iso_icon" fill="white"><path d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967V3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967Z"></path></svg><p></p>',
    });
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'time',
      order: 7,
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" id="time_icon" fill="white"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg></svg><p></p>',
    });
  });

  lightbox.on('uiRegister', function () {
    lightbox.pswp.ui.registerElement({
      name: 'time',
      order: 12,
      html: '詳細',
      isButton: true,
      onClick: () => {
        document.getElementById("mySidenav").style.width = "21rem";
      }
    });
  });

  lightbox.on("change", async () => {
    history.replaceState("", document.title, "#" + lightbox.pswp.currSlide.index);
    ExifReader.load(pswp.currSlide.data.element.href).then(result => {
      document.getElementById("aperture_icon").nextSibling.innerHTML = result["FNumber"].description.substring(2);
      document.getElementById("iso_icon").nextSibling.innerHTML = result["ISOSpeedRatings"].description;
      document.getElementById("speed_icon").nextSibling.innerHTML = result["ExposureTime"].description;
      document.getElementById("length_icon").nextSibling.innerHTML = result["FocalLengthIn35mmFilm"].description;
      document.getElementById("time_icon").nextSibling.innerHTML = result["DateTimeOriginal"].description.split(" ")[1];
      if (result["Exposure2012"] && !pswp.currSlide.data.element.href.split('/').pop().includes("Edit")) {
        document.getElementById("side-warning").style.display = "none";
        document.getElementById("side-detail").style.display = "block";
        document.querySelector(".exposure input").value = result["Exposure2012"].description.replace(/^\++/, '');
        document.querySelector(".exposure").setAttribute("attr", result["Exposure2012"].description.replace(/^\++/, ''));
        document.querySelector(".contrast input").value = result["Contrast2012"].description.replace(/^\++/, '');
        document.querySelector(".contrast").setAttribute("attr", result["Contrast2012"].description.replace(/^\++/, ''));
        document.querySelector(".highlights input").value = result["Highlights2012"].description.replace(/^\++/, '');
        document.querySelector(".highlights").setAttribute("attr", result["Highlights2012"].description.replace(/^\++/, ''));
        document.querySelector(".shadows input").value = result["Shadows2012"].description.replace(/^\++/, '');
        document.querySelector(".shadows").setAttribute("attr", result["Shadows2012"].description.replace(/^\++/, ''));
        document.querySelector(".whites input").value = result["Whites2012"].description.replace(/^\++/, '');
        document.querySelector(".whites").setAttribute("attr", result["Whites2012"].description.replace(/^\++/, ''));
        document.querySelector(".blacks input").value = result["Blacks2012"].description.replace(/^\++/, '');
        document.querySelector(".blacks").setAttribute("attr", result["Blacks2012"].description.replace(/^\++/, ''));
        document.querySelector(".temp input").value = result["Temperature"].description.replace(/^\++/, '');
        document.querySelector(".temp").setAttribute("attr", result["Temperature"].description.replace(/^\++/, ''));
        document.querySelector(".tint input").value = result["Tint"].description.replace(/^\++/, '');
        document.querySelector(".tint").setAttribute("attr", result["Tint"].description.replace(/^\++/, ''));
        document.querySelector(".vibrance input").value = result["Vibrance"].description.replace(/^\++/, '');
        document.querySelector(".vibrance").setAttribute("attr", result["Vibrance"].description.replace(/^\++/, ''));
        document.querySelector(".saturation input").value = result["Saturation"].description.replace(/^\++/, '');
        document.querySelector(".saturation").setAttribute("attr", result["Saturation"].description.replace(/^\++/, ''));
        if (result["PostCropVignetteMidpoint"]) {
        document.querySelector(".wrap-collabsible.pcvignette").style.display = "block";
        document.querySelector(".midpoint input").value = result["PostCropVignetteMidpoint"].description.replace(/^\++/, '');
        document.querySelector(".midpoint").setAttribute("attr", result["PostCropVignetteMidpoint"].description.replace(/^\++/, ''));
        document.querySelector(".amount input").value = result["PostCropVignetteAmount"].description.replace(/^\++/, '');
        document.querySelector(".amount").setAttribute("attr", result["PostCropVignetteAmount"].description.replace(/^\++/, ''));
        document.querySelector(".roundness input").value = result["PostCropVignetteRoundness"].description.replace(/^\++/, '');
        document.querySelector(".roundness").setAttribute("attr", result["PostCropVignetteRoundness"].description.replace(/^\++/, ''));
        document.querySelector(".feather input").value = result["PostCropVignetteFeather"].description.replace(/^\++/, '');
        document.querySelector(".feather").setAttribute("attr", result["PostCropVignetteFeather"].description.replace(/^\++/, ''));
        document.querySelector(".vhighlights input").value = result["PostCropVignetteHighlightContrast"].description.replace(/^\++/, '');
        document.querySelector(".vhighlights").setAttribute("attr", result["PostCropVignetteHighlightContrast"].description.replace(/^\++/, ''));
        }
        document.querySelector(".texture input").value = result["Texture"].description.replace(/^\++/, '');
        document.querySelector(".texture").setAttribute("attr", result["Texture"].description.replace(/^\++/, ''));
        document.querySelector(".clarity input").value = result["Clarity2012"].description.replace(/^\++/, '');
        document.querySelector(".clarity").setAttribute("attr", result["Clarity2012"].description.replace(/^\++/, ''));
        document.querySelector(".dehaze input").value = result["Dehaze"].description.replace(/^\++/, '');
        document.querySelector(".dehaze").setAttribute("attr", result["Dehaze"].description.replace(/^\++/, ''));
        document.querySelector(".sharpness input").value = result["Sharpness"].description.replace(/^\++/, '');
        document.querySelector(".sharpness").setAttribute("attr", result["Sharpness"].description.replace(/^\++/, ''));
        document.querySelector(".sharpen-radius input").value = result["SharpenRadius"].description.replace(/^\++/, '');
        document.querySelector(".sharpen-radius").setAttribute("attr", result["SharpenRadius"].description.replace(/^\++/, ''));
        document.querySelector(".sharpen-detail input").value = result["SharpenDetail"].description.replace(/^\++/, '');
        document.querySelector(".sharpen-detail").setAttribute("attr", result["SharpenDetail"].description.replace(/^\++/, ''));
        document.querySelector(".sharpen-masking input").value = result["SharpenEdgeMasking"].description.replace(/^\++/, '');
        document.querySelector(".sharpen-masking").setAttribute("attr", result["SharpenEdgeMasking"].description.replace(/^\++/, ''));
      } else {
        document.getElementById("side-warning").style.display = "block";
        document.getElementById("side-detail").style.display = "none";
      }
    });
  });

  lightbox.on("close", () => {
    history.replaceState("", document.title, window.location.pathname);
    document.getElementById("mySidenav").style.width = "0";
  });

  lightbox.init();

  if (window.location.hash.substring(1).length > 0) {
    const index = parseInt(window.location.hash.substring(1), 10);
    if (!Number.isNaN(index) && index >= 0 && index < gallery.querySelectorAll("a").length) {
      lightbox.loadAndOpen(index, { gallery });
    }
  }
}
