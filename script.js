function saveAsJpeg() {
    const billList = document.getElementById("billList");
    const billListHtml = billList.innerHTML;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg">' + billListHtml + '</svg>');

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "bill.jpg";
        link.click();
    };
}