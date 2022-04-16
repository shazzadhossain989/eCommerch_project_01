document.getElementById('btn_genarator').addEventListener('click', function() {
    let text = document.getElementById('text_input').value;
    JsBarcode('#barcode', text)
});