document.getElementById("btn_generate").addEventListener('click', function() {
    var text = document.getElementById('text_input').value;
    JsBarcode('#barcode', text)
});