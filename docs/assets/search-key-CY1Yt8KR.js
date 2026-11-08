function r(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d")}function a(e){return r(e).split(/\s+/).filter(Boolean)}export{a,r as s};
